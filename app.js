require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express


const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware

app.request(express.static('./public'))
app.use()