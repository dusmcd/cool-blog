import React from 'react'
import { Container, Segment } from 'semantic-ui-react'
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
    if (!currentArticle.content) return <div>LOADING...</div>
    return (
      <Container>
        <Segment raised>
          <h2>{currentArticle.title}</h2>
        </Segment>
        <Segment raised>
          {currentArticle.content.split('\n').map((pgraph, i) => {
            const key = i * 5
            return <p key={key}>{pgraph}</p>
          })}
        </Segment>
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
