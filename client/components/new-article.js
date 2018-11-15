import React from 'react'
import { Form, Container } from 'semantic-ui-react'

class NewArticle extends React.Component {
  handleSubmit = () => {
    // handle the submit
  }

  render() {
    return (
      <Container>
        <Form>
          <Form.Field>
            <input name="title" placeholder="Title" />
          </Form.Field>
          <Form.TextArea placeholder="Start writing here" />
        </Form>
      </Container>
    )
  }
}

export default NewArticle
