const db = require('../db')
const Sequelize = require('sequelize')

const Comment = db.define('comment', {
  content: {
    type: Sequelize.TEXT,
  },
})

module.exports = Comment
