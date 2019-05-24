import React, { Component } from 'react'
import {
  Input,
  Icon,
  Button } from 'semantic-ui-react'
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
      emailError: null,
      password: '',
      passwordError: null,
      invalid: null
    }
  }

  onChange = (event) => {
    const {
      name,
      value } = event.target

    if (name === 'email') {
      this.setState({
        email: value.replace(' ', '').toLowerCase(),
        emailError: null,
        invalid: null
      })
    } else {
      this.setState({
        password: value,
        passowordError: null,
        invalid: null
      })
    }
  }

  onSubmit = (event) => {
    event.preventDefault()

    const {
      email,
      password } = this.state

    axios.post(`${URL}/api/auth/login`,
      {
        email,
        password
      })
      .then(res => {
        const { token } = res.data
        if (res.data.token) {
          localStorage.setItem('token', token)
          this.props.history.push('/')
        }
      })
      .catch(err => {
        const {
          status,
          data
        } = err.response

        if (status === 400 || status === 401) this.setState({ ...data })
        else alert(`Error: ${data}`)
      })
  }

  render() {
    const {
      email,
      emailError,
      password,
      passwordError,
      invalid } = this.state

    const {
      onChange,
      onSubmit } = this

    return (
      <form
        autoComplete='off'
        className='content-sect'
        onSubmit={onSubmit}>
        <Input
          className={invalid || emailError
            ? 'error'
            : null}
          name='email'
          type='text'
          icon
          iconPosition='left'
          placeholder='E-mail'
          value={email}
          onChange={onChange}>
          <Icon name='user' />
          <input />
        </Input>
        {invalid || emailError
          ? <div className='error-message'>{invalid || emailError}</div>
          : null}
        <Input
          className={invalid || passwordError
            ? 'error'
            : null}
          name='password'
          type='password'
          icon
          iconPosition='left'
          placeholder='Password'
          value={password}
          onChange={onChange}>
          <Icon name='lock' />
          <input />
        </Input>
        {invalid || passwordError
          ? <div className='error-message'>{invalid || passwordError}</div>
          : null}
        <Button className='pacific-blue auth-btn'>Log In</Button>
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