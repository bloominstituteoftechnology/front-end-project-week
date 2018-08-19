import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import axios from 'axios'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      hasRegistered: true
    }
  }

  renderField = (field) => {
    const { touched, error } = field.meta
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <input
          className='form-control'
          type={field.type}
          placeholder={field.placeholder}
          {...field.input}
        />
        <div className='text-help' style={{ color: 'red' }}>
          {touched ? error : ''}
        </div>
      </div>
    )
  }
  handleLogin = (values, cb) => {
    axios
      .post('http://localhost:8000/auth/login', values)
      .then((res) => {
        console.log(res)
        localStorage.setItem('token', JSON.stringify(res.data.token))
        cb()
      })
      .catch((err) => console.log(err))
  }
  handleRegister = (values, cb) => {
    console.log('METHOD')
    axios
      .post('http://localhost:8000/auth/register', values)
      .then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data.token))
        cb()
      })
      .catch((err) => console.log(err))
  }
  onSubmit = (values) => {
    if (this.state.hasRegistered === false) {
      this.handleRegister(values, () => {
        this.props.history.push('/')
      })
    } else {
      this.handleLogin(values, () => {
        this.props.history.push('/')
      })
    }
  }
  handleSwitch = () => {
    this.setState({
      hasRegistered: false
    })
  }
  render () {
    const { handleSubmit } = this.props

    return (
      <div>
        <form
          onSubmit={
            this.state.hasRegistered ? (
              handleSubmit(this.onSubmit)
            ) : (
              handleSubmit(this.onSubmit)
            )
          }
        >
          <Field
            name='username'
            placeholder='username'
            type='text'
            component={this.renderField}
          />
          <Field
            name='password'
            type='password'
            placeholder='password'
            component={this.renderField}
          />
          <button type='submit'>Log in</button>
        </form>
        <div onClick={this.handleSwitch}>Or Register</div>
      </div>
    )
  }
}
function validate (values) {
  const errors = {}
  if (!values.username) {
    errors.username = 'Must Enter your username or Register'
  }
  if (!values.password) {
    errors.password = 'Must Enter a Password'
  }
  return errors
}

export default reduxForm({
  validate,
  form: 'loginForm'
})(Login)
