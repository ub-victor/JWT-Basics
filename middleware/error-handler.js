// Import the CustomAPIError class from the errors module for custom error handling
const { CustomAPIError } = require('../errors')

// Import StatusCodes from http-status-codes library for standard HTTP status codes
const { StatusCodes } = require('http-status-codes')

// Define the error handler middleware function that takes error, request, response, and next as parameters
const errorHandlerMiddleware = (err, req, res, next) => {
  // Check if the error is an instance of CustomAPIError (our custom error class)
  if (err instanceof CustomAPIError) {
    // If it's a custom error, respond with the error's status code and message in JSON format
    return res.status(err.statusCode).json({ msg: err.message })
  }
  // If it's not a custom error, respond with a generic 500 Internal Server Error
  return res
    // Set the status code to 500 (Internal Server Error)
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    // Send a plain text message to the client
    .send('Something went wrong try again later')
}

// Export the error handler middleware so it can be used in other files
module.exports = errorHandlerMiddleware