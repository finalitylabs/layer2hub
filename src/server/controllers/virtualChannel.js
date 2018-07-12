const model = require('../models/virtualChannel')
const util = require('../helpers/util')

module.exports.closeVC = (req, res, next) => {
  const body = req.swagger.params['body'].value
  //util.response(model.closeVC(body), 200, res, next)
  util.response(Promise.resolve({ mock: true }), 200, res, next)
}

module.exports.openVC = (req, res, next) => {
  const body = req.swagger.params['body'].value
  util.response(Promise.resolve({ mock: true }), 200, res, next)
}

module.exports.updateVC = (req, res, next) => {
  const body = req.swagger.params['body'].value
  util.response(Promise.resolve({ mock: true }), 200, res, next)
}
