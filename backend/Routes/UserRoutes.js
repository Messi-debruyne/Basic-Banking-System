const express = require('express')
const { getUser, createUser, updateamount } = require('../controllers/UserController')
const router = express.Router()

router.route('/users/all').get(getUser)
router.route('/users/updateamount').post(updateamount)


module.exports = router