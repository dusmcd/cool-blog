import React from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { addCommentThunk } from '../../store'

class CommentWrite extends React.Component {
  constructor() {
    super()
    this.state = {
      newComment: false,
      content: '',
    }
  }
  handleChange = (e, data) => {
    this.setState({ content: data.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props
      .addComment(this.state, this.props.articleId)
      .then(() => this.setState({ newComment: false }))
  }

  clickListener = () => {
    this.setState({ newComment: true })
  }

  render() {
    return this.state.newComment ? (
      <Form onSubmit={this.handleSubmit}>
        <Form.TextArea
          placeholder="Write comment here"
          name="content"
          onChange={this.handleChange}
        />
        <Button color="green" type="submit">
          Save
        </Button>
      </Form>
    ) : (
      <Button primary onClick={this.clickListener}>
        Comment
      </Button>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    addComment: (comment, articleId) =>
      dispatch(addCommentThunk(comment, articleId)),
  }
}

export default connect(
  null,
  mapDispatch
)(CommentWrite)
