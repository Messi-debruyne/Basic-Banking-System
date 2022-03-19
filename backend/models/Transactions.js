const mongoose = require('mongoose')

const TransactionsSchema = mongoose.Schema({
    sender:{
        type:String,
        required:true,
    },
    receiver:{
        type:String,
        required:true
    },
    amount: {
        type:Number,
        required:true
    }
})


module.exports = mongoose.model('Transactions',TransactionsSchema)