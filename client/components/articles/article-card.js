import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ArticleCard = props => {
  const { article } = props
  const cleanContent = article.content.replace(/<br \/>/g, ' ')
  return (
    <Segment raised>
      <Link to={`/articles/view/${article.id}?title=${article.slug}`}>
        <h3>{article.title}</h3>
      </Link>
      <p>{cleanContent}</p>
    </Segment>
  )
}

export default ArticleCard
