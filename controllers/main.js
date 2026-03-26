// Check username, password in post(login) request
// if exist create new JWT
// send back to front-end

// setup authentication so only the request with JWT can access the dashboard

const {CustomAPIError} = require('../errors')
const login = async (req, res)=>{
    const {username, password} = req.body
    // console.log(username,password)
    // mongo 
    // Validation layer
    // check in the controller
    if(!username || password){
        throw new CustomAPIError('Please provide email and password', 400);
    }
    res.sent('Fake Login/Register/Signup Route')
    
}

const dashboard = async (req, res)=>{
    /*
    Math.floor(...): Rounds the resulting number down to the nearest whole integer.
    Math.floor(0.1) becomes 0.
    Math.floor(99.99) becomes 99. 
    */
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg:`Hello Doe`, secret: `Here is your authorized data, your luck number is ${luckyNumber}`})
}

module.exports = {
    login,dashboard
}