import React from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'

class CommentWrite extends React.Component {
  constructor() {
    super()
    this.state = {
      newComment: false,
      content: '',
    }
  }
  handleChange = (e, data) => {
    // handle change
  }

  clickListener = () => {
    this.setState({ newComment: true })
  }

  render() {
    return this.state.newComment ? (
      <Form>
        <Form.TextArea placeholder="Write comment here" name="content" />
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

export default CommentWrite
