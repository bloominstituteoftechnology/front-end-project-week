import React, { Component } from 'react'
import { Input, Icon, Button } from 'semantic-ui-react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const {
  REACT_APP_DEV_LOGIN,
  REACT_APP_PROD_LOGIN
} = process.env

const URL = REACT_APP_DEV_LOGIN || REACT_APP_PROD_LOGIN

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

  submitHandler = (event) => {
    event.preventDefault()
    const {
      email,
      password
    } = this.state

    axios.post(URL, {
      email,
      password
    }).then(res => {
      if (res.data.token) {
        localStorage.setItem('jwt', res.data.token)
        this.props.history.push('/')
      }
    }).catch(err => {
      const code = err.response.status

      if (code === 400 || code === 401) {
        this.setState({ ...err.response.data })
      } else {
        alert('Error: ', err.response.data)
      }})
  }

  onChange = (event) => {
    const {
      name,
      value
    } = event.target

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

  render() {
    const {
      email,
      emailError,
      password,
      passwordError,
      invalid
    } = this.state

    const {
      submitHandler,
      onChange
    } = this

    return (
      <form
        autoComplete='off'
        className='content-sect'
        onSubmit={submitHandler}>
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