const login = async (req, res)=>{
    res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req, res)=>{
    /*
    Math.floor(...): Rounds the resulting number down to the nearest whole integer.
    Math.floor(0.1) becomes 0.
    Math.floor(99.99) becomes 99. 
    */
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).jsfon({msg:`Hello Doe`, secret: `Here is your authorized data, your luck number is ${luckyNumber}`})
}

module.exports = {
    login,dashboard
}