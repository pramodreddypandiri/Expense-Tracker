require("dotenv").config()
const mongoose  = require('mongoose')
//create a db connection
connectToDB =  () => {
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((conn) => {
        console.log(`Connection to DB: ${conn.connection.host}`)
    }).catch((err) => {
        console.log(err.message)
        process.exit(1)
    })
}

module.exports = connectToDB
