import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ArticleCard = props => {
  const { article } = props
  return (
    <Segment raised>
      <Link to={`/articles/${article.id}?title=${article.slug}`}>
        <h3>{article.title}</h3>
      </Link>
      <p>{article.content}</p>
    </Segment>
  )
}

export default ArticleCard
