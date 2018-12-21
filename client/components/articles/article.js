import React from 'react'
import { Container, Segment } from 'semantic-ui-react'
import { getOneArticleThunk } from '../../store'
import { connect } from 'react-redux'
import CommentWrite from './comment-write'
import CommentRead from './comment-read'

class Article extends React.Component {
  componentDidMount() {
    // fetch article by id
    const articleId = this.props.match.params.id
    this.props.getArticle(articleId)
  }

  componentDidUpdate(prevProps) {
    const prevArticle = prevProps.currentArticle
    const { currentArticle } = this.props
    if (!currentArticle.comments || !prevArticle.comments) return
    if (prevArticle.comments.length !== currentArticle.comments.length) {
      const articleId = this.props.match.params.id
      this.props.getArticle(articleId)
    }
  }

  render() {
    const { currentArticle, currentUser } = this.props
    const isLoggedIn = !!currentUser.id
    if (!currentArticle.content || !currentArticle.comments) {
      return <div>LOADING...</div>
    }
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
        {currentArticle.comments.length ? (
          <Segment>
            {currentArticle.comments.map(comment => {
              return <CommentRead key={comment.id} comment={comment} />
            })}
          </Segment>
        ) : null}

        {isLoggedIn && <CommentWrite articleId={currentArticle.id} />}
      </Container>
    )
  }
}

const mapState = state => {
  return {
    currentArticle: state.article.currentArticle,
    currentUser: state.user.user,
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
