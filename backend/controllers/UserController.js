const User = require('../models/User')

exports.getUser = async(req,res) => {
    const users = await User.find()
    res.status(200).json({success:true,users})
}

exports.updateamount = async(req,res)=> {
    const {email,newamount} = req.query
    const user  = await User.findOne({email})
    user.balance = user.balance + Number(newamount)
    await user.save({validateBeforeSave:false})
    res.status(200).json({success:true,user})
}