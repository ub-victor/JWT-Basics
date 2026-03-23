class CustomAPIError extends Error { // This create a class that extends the Build-in Error , which mean , is now have all the error Properties
    constructor(message){
        super(message)
    }
}

module.exports = CustomAPIError;