const express = require('express')
const router = express.Router()

router.use('/auth', require('./auth'))
router.use('/articles', require('./articles'))
router.use('/admin', isAdmin, require('./admin'))

function isAdmin(req, res, next) {
  if (req.user) {
    if (req.user.admin) {
      return next()
    }
    return res.status(401).send('Unauthorized')
  }
  return res.status(401).send('Unauthorized')
}

module.exports = router
