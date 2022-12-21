const mongoose = require('mongoose')
// schema for database
const userSchema = new mongoose.Schema({
    category: {
        type: String,
        require: [true, "Category is required field"]
        
    },
    amount: {
        type: Number,
        require: [true, "Amount is Required"]
    },
    desccription: {
        type: String,

    },
    date: {
        type: Date,
        default: Date.now
    }


})
module.exports = mongoose.model("expense", userSchema);
