const { User } = require('./user')
const Article = require('./article')
const Comment = require('./comment')
const db = require('../db')

Article.hasMany(Comment)
Comment.belongsTo(User)

module.exports = { User, Article, Comment, db }
