import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ArticleLink = props => {
  return (
    <Link to={`/articles/view/${props.id}?title=${props.slug}`}>
      {props.children}
    </Link>
  )
}

const ArticleCard = props => {
  const { article } = props
  const cleanContent = article.content.replace(/<br \/>/g, ' ')
  return (
    <Segment raised>
      <ArticleLink id={article.id} slug={article.slug}>
        <h3>{article.title}</h3>
      </ArticleLink>
      <p>
        {cleanContent.substring(0, 100)} ...
        <ArticleLink id={article.id} slug={article.slug}>
          <span>see more</span>
        </ArticleLink>
      </p>
    </Segment>
  )
}

export default ArticleCard
