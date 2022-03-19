const express = require('express')
const { createtransaction, transactionsall } = require('../controllers/TransactionsController')
const router = express.Router()

router.route('/transaction/create').post(createtransaction)
router.route('/transaction/all').get(transactionsall)

module.exports = router