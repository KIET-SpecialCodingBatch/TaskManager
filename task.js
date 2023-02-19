const mongoose = require('mongoose')

const TaskmanagerSchema = new mongoose.Schema({
    Question : {
        type : String,
        required : true,
    },
    Date : {
        type : String,
        required : true,
    },
    Description: {
        type:String,
        required:true
    },
    RollNumber:{
        type:String,
        required:true
    },
    Duedate:{
        type:String,
        required:true
    },
    Feedback : {
        type : String,
        required : true,
    },
    Status : {
        type : Boolean,
        required : true,
    }
})

const Taskmanager = mongoose.model('Taskmanager',TaskmanagerSchema)

module.exports = Taskmanager