const mongoose = require("mongoose")
const User = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true,
        
    },
    Email: {
        type: String,
        unique: true,
        required: true,
    },
    Password: {
        type: [String],
        required: true,
    }
})

module.exports = mongoose.model("user", User)