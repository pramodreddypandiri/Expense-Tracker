const express = require('express')
require('./config/database')
const app = express()
// call a function to connect DB
connectToDB()
// middle ware
app.use(express.json)
app.use(express.urlencoded({extended: true}))

app.get('/home', (req, res) => {
    res.send("Hello Expense Tracker")
})
module.exports = app;
