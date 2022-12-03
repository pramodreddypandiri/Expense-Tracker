const express = require('express')
require('./config/database')
const app = express()
connectToDB()
app.use(express.json)
app.use(express.urlencoded({extended: true}))
module.exports = app