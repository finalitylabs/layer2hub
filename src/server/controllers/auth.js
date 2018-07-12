//const firebase = require('firebase-admin')
const response = require('../helpers/response')

// swagger-tools auth controller
module.exports.jwt = (req, def, token, next) => {
  req.data.authUser = { id: 'jwt_disabled' }
  next()
  // if (!token) {
  //   response.error(req, 403, 'Forbidden', next)
  // } else {
  //   firebase.auth().verifyIdToken(token).then((user) => {
  //     req.data.authUser = user
  //     next()
  //   }).catch((error) => {
  //     response.error(req, 401, 'Unauthorized', next)
  //   })
  // }
}
