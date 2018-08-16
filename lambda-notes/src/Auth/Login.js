import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {
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
  onSubmit = (values) => {
    this.handleLogin(values, () => {
      this.props.history.push('/')
    })
  }
  render () {
    const { handleSubmit } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
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
        <Link to='/api/register'>Or Register</Link>
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
