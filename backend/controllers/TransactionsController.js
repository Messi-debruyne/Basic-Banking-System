const Transactions = require('../models/Transactions')


exports.createtransaction = async(req,res) => {
    const transaction = await  Transactions.create(req.query)
    res.status(200).json({success:true,transaction})
}

exports.transactionsall = async(req,res)=> {
    const alltransactions = await Transactions.find()
    res.status(200).json({success:true,alltransactions})
}