import React, { Component } from 'react'
import Loading from '../Loading'
import {
  Button,
  Icon,
  Input } from 'semantic-ui-react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const {
  REACT_APP_DEV,
  REACT_APP_PROD } = process.env

const URL = REACT_APP_DEV || REACT_APP_PROD

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      emailError: '',
      invalid: '',
      loading: false,
      password: '',
      passwordError: ''
    }
  }

  onChange = event => {
    const {
      name,
      value } = event.target

    let error

    switch (name) {
    case 'email':
      error = 'emailError'
      break
    default:
      error = 'passwordError'
    }

    this.setState({
      [error]: '',
      invalid: '',
      [name]: name === 'email'
        ? value.replace(' ', '').toLowerCase()
        : value.replace(' ' , '')
    })
  }

  onSubmit = event => {
    event.preventDefault()

    const {
      email,
      password } = this.state

    this.setState({ loading: true })

    axios.post(`${URL}/api/auth/login`,
      {
        email,
        password
      })
      .then(res => {
        setTimeout(() => {
          const { token } = res.data
          if (res.data.token) {
            localStorage.setItem('token', token)
            this.setState({ laoding: false })
            this.props.history.push('/')
          }
        }, 3000)
      })
      .catch(err => {
        const {
          status,
          data
        } = err.response

        setTimeout(() => {
          if (status === 400 || status === 401) this.setState({
            ...data,
            loading: false
          })
          else {
            alert(`Error: ${data}`)
            this.setState({ laoding: false })
          }
        }, 3000)
      })
  }

  render() {
    const {
      email,
      emailError,
      invalid,
      loading,
      password,
      passwordError} = this.state

    const {
      onChange,
      onSubmit } = this

    if (loading) return <Loading text = 'Validating Credentials' />

    return (
      <form
        autoComplete = 'off'
        className = 'content-sect'
        onSubmit = {onSubmit}>
        <Input
          className = {invalid || emailError
            ? 'error'
            : null}
          icon
          iconPosition = 'left'
          name = 'email'
          onChange = {onChange}
          placeholder = 'E-mail'
          type = 'text'
          value = {email}>
          <Icon name = 'user' />
          <input />
        </Input>
        {invalid || emailError
          ? <div className = 'error-message'>{invalid || emailError}</div>
          : null}
        <Input
          className = {invalid || passwordError
            ? 'error'
            : null}
          icon
          iconPosition = 'left'
          name = 'password'
          type = 'password'
          placeholder = 'Password'
          value = {password}
          onChange = {onChange}>
          <Icon name = 'lock' />
          <input />
        </Input>
        {invalid || passwordError
          ? <div className = 'error-message'>{invalid || passwordError}</div>
          : null}
        <Button className = 'pacific-blue auth-btn'>Log In</Button>
      </form>
    )
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default withRouter(Login)