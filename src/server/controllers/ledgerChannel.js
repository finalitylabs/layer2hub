const model = require('../models/ledgerChannel')
const util = require('../helpers/util')

module.exports.closeLC = (req, res, next) => {
  const body = req.swagger.params['body'].value

  //util.response(model.closeLC(body), 200, res, next)
  util.response(Promise.resolve({ mock: true }), 200, res, next)
}

module.exports.openLC = (req, res, next) => {
  const body = req.swagger.params['body'].value
  util.response(Promise.resolve({ mock: true }), 200, res, next)
}

module.exports.updateLC = (req, res, next) => {
  const body = req.swagger.params['body'].value
  util.response(Promise.resolve({ mock: true }), 200, res, next)
}
