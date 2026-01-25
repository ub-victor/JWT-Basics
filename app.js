require('dotenv').config()
require('express-async-errors')

const express = require('ex  press')
const app = express


const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware

app.use(express.static('./public'))
app.use(express.json())

const port = process.env.PORT || 3000