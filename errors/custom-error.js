class CustomAPIError extends Error { // This create a class that extends the Build-in Error , which mean , is now have all the error Properties
    constructor(message){ // I just initialize the construtor with message for the parent so  i can be able to set an msg
        super(message)  

    }
}

module.exports = CustomAPIError;