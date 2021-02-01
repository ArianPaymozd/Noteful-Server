require('dotenv').config()

function errorHandler(error, req, res, next) {
    let response
    if (process.env.NODE_ENV === 'production') {
      response = { message: error.message, error }
    } else {
      console.error(error)
      response = { message: error.message, error }
    }
    res.status(500).json(response)
  }

  module.exports = errorHandler;