"use strict"

function response(statusCode, message, result) {
  return {
    statusCode: statusCode,
    message: message,
    result: result
  }
}

module.exports = response