const CustomAPIError = require('./custom-error')
const  {StatusCodes} = require('http-status-codes')

class unauthenticatedError extends CustomAPIError {
    constructor(message){
        
    }
} 