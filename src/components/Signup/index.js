import React, { Component } from 'react'
import Loading from '../Loading'
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
      email: '',
      emailError: '',
      firstname: '',
      firstnameError: '',
      lastname: '',
      lastnameError: '',
      loading: false,
      password: '',
      passwordError: '',
      passwordMatch: ''
    }
  }

  change = event => {
    const {
      name,
      value } = event.target

    let error

    switch (name) {
    case 'firstname':
      error = 'firstnameError'
      break
    case 'lastname':
      error = 'lastnameError'
      break
    case 'email':
      error = 'emailError'
      break
    default:
      error = 'passwordError'
    }

    this.setState({
      [name]: value.replace(' ', ''),
      [error]: ''
    })
  }

  submit = event => {
    event.preventDefault()

    this.setState({ loading: true })

    const {
      password,
      passwordMatch } = this.state

    if (password !== passwordMatch) {
      this.setState({ passwordError: 'Passwords do not match.' })
    } else {
      const {
        email,
        firstname,
        lastname,
        password } = this.state

      axios.post(`${URL}/api/auth/signup`, {
        email,
        firstname,
        lastname,
        password })
        .then(() => {
          setTimeout(() => {
            this.setState({ loading: false })
            this.props.history.push('/login')
          }, 3000)
        })
        .catch(err => {
          const {
            status,
            data } = err.response

          setTimeout(() => {
            if (status === 400) this.setState({
              ...data,
              loading: false })
            else {
              this.setState({ loading: false })
              alert(`Error: ${data.msg1}`)
            }
          }, 3000)
        })
    }
  }

  render() {
    const {
      email,
      emailError,
      firstname,
      firstnameError,
      lastname,
      lastnameError,
      loading,
      password,
      passwordError,
      passwordMatch } = this.state

    const {
      change,
      submit } = this

    if (loading) return <Loading text = 'Creating Account' />

    return (
      <form
        autoComplete = 'off'
        className = 'content-sect'
        onSubmit = {submit}>
        <Input
          className = {firstnameError
            ? 'error'
            : null}
          name = 'firstname'
          onChange = {change}
          placeholder = 'First Name'
          type = 'text'
          value = {firstname} />
        {firstnameError
          ? <div className = 'error-message'>{firstnameError}</div>
          : null}
        <Input
          className = {lastnameError
            ? 'error'
            : null}
          name = 'lastname'
          onChange = {change}
          placeholder = 'Last Name'
          type = 'text'
          value = {lastname} />
        {lastnameError
          ? <div className = 'error-message'>{lastnameError}</div>
          : null}
        <Input
          className = {emailError
            ? 'error'
            : null}
          name = 'email'
          type = 'text'
          placeholder = 'E-mail'
          value = {email}
          onChange = {change} />
        {emailError
          ? <div className = 'error-message'>{emailError}</div>
          : null}
        <Input
          className = {passwordError
            ? 'error'
            : null}
          name = 'password'
          onChange = {change}
          placeholder = 'Password'
          type = 'password'
          value = {password} />
        {passwordError
          ? <div className = 'error-message'>{passwordError}</div>
          : null}
        <Input
          className = {passwordError
            ? 'error'
            : null}
          name = 'passwordMatch'
          onChange = {change}
          placeholder = 'Confirm Password'
          type = 'password'
          value = {passwordMatch} />
        {passwordError
          ? <div className = 'error-message'>{passwordError}</div>
          : null}
        <Button className = 'pacific-blue auth-btn'>Register</Button>
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