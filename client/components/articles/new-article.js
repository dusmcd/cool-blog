import React from 'react'
import { Form, Container, Button, Input } from 'semantic-ui-react'
import { createArticleThunk } from '../../store'
import { connect } from 'react-redux'

class NewArticle extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      content: '',
    }
  }
  handleSubmit = event => {
    event.preventDefault()
    this.props.postArticle(this.state)
  }

  handleChange = (e, data) => {
    this.setState({
      [data.name]: data.value,
    })
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Input
              name="title"
              placeholder="Title"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.TextArea
            placeholder="Start writing here"
            name="content"
            onChange={this.handleChange}
          />
          <Button primary>Post</Button>
        </Form>
      </Container>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    postArticle: article => dispatch(createArticleThunk(article)),
  }
}

export default connect(
  null,
  mapDispatch
)(NewArticle)
