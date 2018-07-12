//const firebase = require('firebase-admin')
const response = require('../helpers/response')

// swagger-tools auth controller
module.exports.jwt = (req, def, token, next) => {
  if (!token) {
    response.error(req, 403, 'Forbidden', next)
  } else {
    req.data.authUser = { id: 'jwt_disabled' }
    // firebase.auth().verifyIdToken(token).then((user) => {
    //   req.data.authUser = user
    //   next()
    // }).catch((error) => {
    //   response.error(req, 401, 'Unauthorized', next)
    // })
  }
}
