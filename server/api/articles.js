const router = require('express').Router()
const { Article, Comment, User } = require('../db/models')

// gets all the articles from the db
router.get('/', (req, res, next) => {
  return Article.findAll()
    .then(articles => res.json(articles))
    .catch(err => next(err))
})

// gets the single article associated with the given id
router.get('/:id', (req, res, next) => {
  return Article.findById(req.params.id, {
    include: {
      model: Comment,
      include: User,
    },
  })
    .then(article => res.json(article))
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

router.post('/:id/comment', (req, res, next) => {
  Article.findById(req.params.id)
    .then(article => {
      return Comment.create({
        content: req.body.content,
        articleId: article.id,
        userId: req.user.id,
      })
    })
    .then(comment => {
      return res.json(comment)
    })
    .catch(err => next(err))
})

module.exports = router
