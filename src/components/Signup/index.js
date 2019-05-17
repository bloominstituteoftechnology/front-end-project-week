import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import './index.css'

const {
  REACT_APP_DEV_SIGNUP,
  REACT_APP_PROD_SIGNUP
} = process.env

const URL = REACT_APP_DEV_SIGNUP || REACT_APP_PROD_SIGNUP

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

  submitHandler = (event) => {
    event.preventDefault()

    const {
      password,
      passwordMatch
    } = this.state

    if (password !== passwordMatch) {
      this.setState({ passwordError: 'Passwords do not match.' })
    } else {
      const {
        firstname,
        lastname,
        email,
        password
      } = this.state

      axios.post(URL, {
        firstname,
        lastname,
        email,
        password
      }).then(() => {
        this.props.history.push('/login')
      }).catch(err => {
        if (err.response.status === 400) {
          this.setState({ ...err.response.data })
        } else {
          alert('Error: ', err.response.data)
        }})
    }
  }

  changeHandler = (event) => {
    const {
      name,
      value
    } = event.target

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
    } else {
      this.setState({ [name]: value.replace(' ', '') })
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
      passwordError
    } = this.state

    const {
      submitHandler,
      changeHandler
    } = this

    return (
      <form
        className='content-sect'
        autoComplete='off'
        onSubmit={submitHandler}>
        <Input
          className={firstnameError
            ? 'error'
            : null}
          name='firstname'
          type='text'
          placeholder='First Name'
          value={firstname}
          onChange={changeHandler}
        />
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
          onChange={changeHandler}
        />
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
          onChange={changeHandler}
        />
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
          onChange={changeHandler}
        />
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
          onChange={changeHandler}
        />
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