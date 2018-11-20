import React from 'react'

const ArticleCard = props => {
  const { article } = props
  return <h3>Article title: {article.title}</h3>
}

export default ArticleCard
