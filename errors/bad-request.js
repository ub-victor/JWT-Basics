const CustomAPIError = require ('./custom-error');
const { StatusCodes} = require('http-status-codes'); // This package provides numerical HTTP status codes with Readabke name eg StatusCodes.BAD_REQUEST -> 400
class BadRequest extends CustomAPIError {
    constructor (message){
        super(message)
        this.StatusCodes = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequest