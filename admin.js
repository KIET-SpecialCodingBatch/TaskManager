const mongoose = require('mongoose')

const ManagerSchema = new mongoose.Schema({
    Email : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    }
})

const Manager= mongoose.model('Task',ManagerSchema)

module.exports = Manager