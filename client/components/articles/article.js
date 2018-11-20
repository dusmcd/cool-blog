import React from 'react'
import { Container } from 'semantic-ui-react'
import { getOneArticleThunk } from '../../store'
import { connect } from 'react-redux'

class Article extends React.Component {
  componentDidMount() {
    // fetch article by id
    const articleId = this.props.match.params.id
    this.props.getArticle(articleId)
  }

  render() {
    const { currentArticle } = this.props
    return (
      <Container>
        <h2>{currentArticle.title}</h2>
        <p>{currentArticle.content}</p>
      </Container>
    )
  }
}

const mapState = state => {
  return {
    currentArticle: state.article.currentArticle,
  }
}

const mapDispatch = dispatch => {
  return {
    getArticle: id => dispatch(getOneArticleThunk(id)),
  }
}

export default connect(
  mapState,
  mapDispatch
)(Article)
