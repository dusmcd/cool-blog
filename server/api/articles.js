const router = require('express').Router()
const { Article } = require('../db/models')

router.get('/', (req, res, next) => {
  return Article.findAll()
    .then(articles => res.json(articles))
    .catch(err => next(err))
})

router.post('/', (req, res, next) => {
  // extract relevant fields
  const newArticle = {
    title: req.body.title,
    content: req.body.content,
  }
  return Article.create(newArticle)
    .then(article => res.json(article))
    .catch(err => next(err))
})

module.exports = router
