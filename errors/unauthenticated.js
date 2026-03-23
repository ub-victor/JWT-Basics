const { UnauthenticatedError } = require('.')
const CustomAPIError = require('./custom-error')
const  {StatusCodes} = require('http-status-codes')

class unauthenticatedError extends CustomAPIError {
    constructor(message){
        super(message)
        this.StatusCodes = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnauthenticatedError;