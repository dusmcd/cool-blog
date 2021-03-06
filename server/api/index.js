const express = require('express')
const router = express.Router()

router.use('/auth', require('./auth'))
router.use('/articles', require('./articles'))

module.exports = router
