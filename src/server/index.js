const fs = require('fs')
const path = require('path')
const http = require('http')
const cluster = require('cluster')
const app = require('connect')()
const swaggerTools = require('swagger-tools')
const jsyaml = require('js-yaml')
const auth = require('./controllers/auth')
const response = require('./helpers/response')

const maxCPUs = require('os').cpus().length
const serverPort = process.env.PORT || 8080
const isProduction = process.env.NODE_ENV === 'production'
const env = isProduction ? 'production' : 'development'
const limitCPUs = Math.min(maxCPUs, 4)
const numCPUs = isProduction ? (process.env.NUM_CPUS || limitCPUs) : 1

// cluster the process numCPUs times
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`)

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`)
  })
} else {
  // swaggerRouter configuration
  const options = {
    swaggerUi: path.join(__dirname, '/swagger.json'),
    controllers: path.join(__dirname, './controllers'),
    useStubs: !isProduction // Conditionally turn on stubs (mock mode)
  }

  // The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
    // TODO populate spec via config or env var
  const spec = fs.readFileSync(path.join(__dirname, '/../spec/layer2hub_0.0.0_swagger.yaml'), 'utf8')
  const swaggerDoc = jsyaml.safeLoad(spec)

  // allow override of spec host for interactive doc usage
  // TODO populate host via config or env var
  swaggerDoc.host = isProduction ? `layer2hub.network:${serverPort}` : `localhost:${serverPort}`

  // Initialize the Swagger middleware
  swaggerTools.initializeMiddleware(swaggerDoc, middleware => {

    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata())

    //CORS and response init
    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS')
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

      // OPTIONS requests return headers
      if (req.method.toLowerCase() === 'options') {
        return res.end()
      }

      //give us a place to store error/responses
      req.data = { statusCode: 200 }
      res.data = { statusCode: 200 }
      next()
    })

    //auth
    app.use(middleware.swaggerSecurity({
      Bearer: auth.jwt
    }))

    //auth error
    app.use((req, res, next) => {
      if (req.data.statusCode !== 200) {
        return response.send(res, req.data)
      }

      next()
    })

    // Validate Swagger requests
    app.use(middleware.swaggerValidator())

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options))

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi())

    // handle all responses
    app.use((req, res, next) => {
      // all valid responses have a body
      if (!res.data.body) {
        response.error(res, 404, req.originalUrl + ' Not found')
      }
      response.send(res, res.data, next)
    })

    //error logging
    app.use((req, res, next) => {
      if (res.data.statusCode >= 400) {
        console.error(`Error ${res.data.statusCode}`, JSON.stringify({
          req: {
            headers: req.headers,
            url: req.originalUrl,
            body: req.body
          },
          res: res.data
        }))
      }

      next()
    })

    // Start the server
    http.createServer(app).listen(serverPort, function () {
      console.log('layer2hub is listening on port %d (http://localhost:%d) in env %s', serverPort, serverPort, env)
    })
  })
}