const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Rollnumber : {
        type : String,
        required : true
    }
})

const User= mongoose.model('User',UserSchema)

module.exports = User