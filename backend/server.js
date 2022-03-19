const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./models/User')
const user = require('./Routes/UserRoutes')
const transaction = require('./Routes/TransactionRoutes')

mongoose.connect('mongodb+srv://test:test@cluster0.kft4i.mongodb.net/sparks?retryWrites=true&w=majority',
{
useNewUrlParser: true,
useUnifiedTopology: true,
}).then(() => {
    console.log('mongoDB connected')
})
app.use(cors())
app.use('/',user)
app.use('/',transaction)
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())



app.listen(1234,()=>{
    console.log('listening on the port ')
})

