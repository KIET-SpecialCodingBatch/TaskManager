const express = require('express')
const mongoose = require('mongoose')

const DB = 'mongodb://0.0.0.0:27017/Project'
mongoose.connect(DB, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})
const Taskmanager = require('./Model/task')

app.post('/add-Questionn', async(req,res) => {
    const Question = new Taskmanager(req.body)
    try{
        await Question.save()
        res.status(201).json({
            status: 'Success',
            data : {
                Question
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})
app.get('/get-Questionn', async (req,res) => {
    const Question = await Taskmanager.find({})
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                Question
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})
const Manager = require('./Model/admin')
const User = require('./Model/user')

app.post('/add-email', async(req,res) => {
    const emaildata = new Manager(req.body)
    try{
        await emaildata.save()
        res.status(201).json({
            status: 'Success',
            data : {
                emaildata
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})



app.post('/add-user', async(req,res) => {
    const Userdata = new User(req.body)
    try{
        await Userdata.save()
        res.status(201).json({
            status: 'Success',
            data : {
                Userdata
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

app.post('/add-task', async(req,res) => {
    const taskdata = new task(req.body)
    try{
        await taskdata.save()
        res.status(201).json({
            status: 'Success',
            data : {
                taskdata
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

app.get('/gettask',async(req,res) => {
    try{
        return res.json(await mongoose.model.find()) ;
    }
    catch(err){
        console.log(err)
    }
})

