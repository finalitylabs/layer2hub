

module.exports.success = (obj, code, payload, next) =>  {
  //console.log('success',body)
  obj.data.statusCode = code
  obj.data.body.payload = payload

  if (next) {
    next()
  }
}

module.exports.error = (obj, code, message, next) => {
  //console.log('error',code,message)
  obj.data.statusCode = code
  obj.data.body.payload = { message }

  if (next) {
    next()
  }
}

module.exports.send = (res, data, next) => {
  //console.log('send',data.body)
  res.writeHead(data.statusCode, { 'Content-Type': 'application/json'})
  res.write(JSON.stringify(data.body || {}))
  res.end()

  if (next) {
    next()
  }
}


