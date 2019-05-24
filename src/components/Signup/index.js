import React, { Component } from 'react'
import {
  Input,
  Button } from 'semantic-ui-react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import './index.css'

const {
  REACT_APP_DEV,
  REACT_APP_PROD } = process.env

const URL = REACT_APP_DEV || REACT_APP_PROD

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      firstname: '',
      firstnameError: null,
      lastname: '',
      lastnameError: null,
      email: '',
      emailError: null,
      password: '',
      passwordMatch: '',
      passwordError: null
    }
  }

  onChange = (event) => {
    const {
      name,
      value } = event.target

    if (name === 'firstname') {
      this.setState({
        [name]: value.replace(' ', ''),
        firstnameError: null
      })
    } else if (name === 'lastname') {
      this.setState({
        [name]: value.replace(' ', ''),
        lastnameError: null
      })
    } else if (name === 'email') {
      this.setState({
        [name]: value.replace(' ', '').toLowerCase(),
        emailError: null })
    } else if (name === 'password' || name === 'passwordMatch') {
      this.setState({
        [name]: value,
        passwordError: null
      })
    }
  }

  onSubmit = (event) => {
    event.preventDefault()

    const {
      password,
      passwordMatch } = this.state

    if (password !== passwordMatch) {
      this.setState({ passwordError: 'Passwords do not match.' })
    } else {
      const {
        firstname,
        lastname,
        email,
        password } = this.state

      axios.post(`${URL}/api/auth/signup`, {
        firstname,
        lastname,
        email,
        password })
        .then(() => {
          this.props.history.push('/login')
        })
        .catch(err => {
          const {
            status,
            data } = err.response

          if (status === 400) this.setState({ ...data })
          else alert(`Error: ${data}`)
        })
    }
  }

  render() {
    const {
      firstname,
      firstnameError,
      lastname,
      lastnameError,
      email,
      emailError,
      password,
      passwordMatch,
      passwordError } = this.state

    const {
      onChange,
      onSubmit } = this

    return (
      <form
        className='content-sect'
        autoComplete='off'
        onSubmit={onSubmit}>
        <Input
          className={firstnameError
            ? 'error'
            : null}
          name='firstname'
          type='text'
          placeholder='First Name'
          value={firstname}
          onChange={onChange} />
        {firstnameError
          ? <div className='error-message'>{firstnameError}</div>
          : null}
        <Input
          className={lastnameError
            ? 'error'
            : null}
          name='lastname'
          type='text'
          placeholder='Last Name'
          value={lastname}
          onChange={onChange} />
        {lastnameError
          ? <div className='error-message'>{lastnameError}</div>
          : null}
        <Input
          className={emailError
            ? 'error'
            : null}
          name='email'
          type='text'
          placeholder='E-mail'
          value={email}
          onChange={onChange} />
        {emailError
          ? <div className='error-message'>{emailError}</div>
          : null}
        <Input
          className={passwordError
            ? 'error'
            : null}
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={onChange} />
        {passwordError
          ? <div className='error-message'>{passwordError}</div>
          : null}
        <Input
          className={passwordError
            ? 'error'
            : null}
          name='passwordMatch'
          type='password'
          placeholder='Confirm Password'
          value={passwordMatch}
          onChange={onChange} />
        {passwordError
          ? <div className='error-message'>{passwordError}</div>
          : null}
        <Button className='pacific-blue auth-btn'>Register</Button>
      </form>
    )
  }
}

Signup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default withRouter(Signup)