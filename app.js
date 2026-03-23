require('dotenv').config()
require('express-async-errors')
const connectDB = require('./db/connect')

const express = require('express')
const app = express();

const mainRouter = require('./routes/main')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json()) // This must always comes first so it can be the app can ready json from the json
app.use('/api/v1', mainRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
app.use(express.static('./public'))

const port = process.env.PORT || 3000

const start = async()=> {
    try{
        await connectDB(process.env.DB_URL)
        app.listen(port, ()=>{
            console.log(`Server is listening on port ${port}...`)
        })

    }catch(error){
        console.log(error)
    }
}

start()