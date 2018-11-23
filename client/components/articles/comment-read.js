import React from 'react'
import { Segment } from 'semantic-ui-react'

class CommentRead extends React.Component {
  constructor() {
    super()
    this.state = {
      commentEdit: false,
    }
  }

  render() {
    const { comment } = this.props
    if (!comment.user) return <div>LOADING...</div>
    return (
      <Segment vertical>
        <strong>{comment.user.name}</strong>
        <p>{comment.content}</p>
      </Segment>
    )
  }
}

export default CommentRead
