import React from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'
import { Form, Input } from './utility'
import { createUserThunk, setErrorAction, setRequiredClass } from '../store'
import history from '../history'

class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: { required: true, value: '' },
      lastName: { required: false, value: '' },
      username: { required: true, value: '' },
      email: { required: true, value: '' },
      password: { required: true, value: '' },
    }
  }
  handleChange = event => {
    event.persist()
    this.setState(prevState => {
      return {
        [event.target.name]: {
          ...prevState[event.target.name],
          value: event.target.value,
        },
      }
    })
  }

  formatFormData(state) {
    const formData = {}
    Object.keys(state).forEach(field => {
      formData[field] = state[field].value
    })
    return formData
  }
  handleSubmit = event => {
    event.preventDefault()
    let isValid = true
    const formData = this.formatFormData(this.state)
    this.props.createUser(formData).then(() => {
      Object.keys(this.state).forEach(field => {
        if (this.state[field].required && !this.state[field].value) {
          isValid = false
          this.props.setError('Please fill out all mandatory fields')
          this.props.setRequiredClass(field)
        }
      })
      if (this.props.error) isValid = false
      isValid && history.push('/')
    })
  }

  componentWillUnmount() {
    this.props.setError(false)
  }
  render() {
    return (
      <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}>
        <Input
          type="text"
          placeholder="First Name"
          label="First Name"
          name="firstName"
          value={this.state.firstName.value}
          requiredError={this.props.requiredClass}
        />
        <Input
          type="text"
          placeholder="Last Name"
          label="Last Name"
          name="lastName"
          value={this.state.lastName.value}
        />
        <Input
          type="text"
          placeholder="Username"
          label="Username"
          value={this.state.username.value}
          name="username"
          requiredError={this.props.requiredClass}
        />
        <Input
          type="text"
          placeholder="Email"
          label="Email"
          name="email"
          value={this.state.email.value}
          requiredError={this.props.requiredClass}
        />
        <Input
          type="password"
          placeholder="Password"
          label="Password"
          name="password"
          value={this.state.password.value}
          requiredError={this.props.requiredClass}
        />
        <button type="submit" className="ui primary button">
          Sign Up
        </button>
        {this.props.error && (
          <Message negative>
            <p>{this.props.error}</p>
          </Message>
        )}
      </Form>
    )
  }
}

const mapState = state => {
  return {
    error: state.user.error,
    requiredClass: state.user.requiredClass,
  }
}

const mapDispatch = dispatch => {
  return {
    createUser: formData => dispatch(createUserThunk(formData)),
    setError: message => dispatch(setErrorAction(message)),
    setRequiredClass: field => dispatch(setRequiredClass(field)),
  }
}

export default connect(
  mapState,
  mapDispatch
)(SignUp)
