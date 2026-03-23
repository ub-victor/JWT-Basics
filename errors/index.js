/*
What is a barrel file

An index.js inside a folder acts as a barrel that re-exports modules from that folder.
It provides a single entry point for importing everything from that directory 
Which means Node.js will look for an index.js inside the errors folder and use its exports.
It allows us to not to this in the error-handler
to just writ
    const { CustomAPIError } = require('../errors')
without index we you used 
    const { CustomAPIError, BadRequestError, UnauthenticatedError } = require('./errors')

Advantages 
    - Clean Import
    - Encapsulation
    - No circular dependency issuers
*/


const CustomAPIError = require('./custom-error')
const BadRequestError = require('./bad-request')
const UnauthenticatedError = require('./unauthenticated')

module.exports = {
    CustomAPIError,
    BadRequestError,
    UnauthenticatedError
}

