const router = require('express').Router()

router.use('/articles', require('./articles-admin'))

module.exports = router
