import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import './index.css'

const URL = 'https://lambda-notes0706.herokuapp.com/api/auth/signup'

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
      username: '',
      usernameError: null,
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
          username,
          password
        } = this.state

        axios.post(URL, {
          firstname,
          lastname,
          email,
          username,
          password
        }).then(() => {
          this.props.history.push('/login')
        }).catch(err => {
          if (err.response.status) {
            if (err.response.status === 400 && err.response.data[0] === 'firstname') {
              this.setState({ firstnameError: err.response.data[1] })
            } else if (err.response.status === 400 && err.response.data[0] === 'lastname') {
              this.setState({ lastnameError: err.response.data[1] })
            } else if (err.response.status === 400 && err.response.data[0] === 'email') {
              this.setState({ emailError: err.response.data[1] })
            } else if (err.response.status === 400 && err.response.data[0] === 'username') {
              this.setState({ usernameError: err.response.data[1] })
            } else if (err.response.status === 400 && err.response.data[0] === 'password') {
              this.setState({ passwordError: err.response.data[1] })
            } else {
              alert(`Error: ${err.response.status} ${err.response.data[1]}`)
            }
          } else {
            alert(`Error: ${err}`)
          }
        })
      }
    }

    OnChange = (event) => {
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
      } else if (name === 'username') {
        this.setState({
          [name]: value.replace(' ', '').toLowerCase(),
          usernameError: null })
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
        username,
        usernameError,
        password,
        passwordMatch,
        passwordError
      } = this.state

      return (
        <form
          className='content'
          autoComplete='off'
          onSubmit={this.submitHandler}>
          <Input
            className={firstnameError
              ? 'error'
              : null}
            name='firstname'
            type='text'
            placeholder='First Name'
            value={firstname}
            onChange={this.OnChange}
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
            onChange={this.OnChange}
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
            placeholder='Email'
            value={email}
            onChange={this.OnChange}
          />
          {emailError
            ? <div className='error-message'>{emailError}</div>
            : null}
          <Input
            className={usernameError
              ? 'error'
              : null}
            name='username'
            type='text'
            placeholder='Username'
            value={username}
            onChange={this.OnChange}
          />
          {usernameError
            ? <div className='error-message'>{usernameError}</div>
            : null}
          <Input
            className={passwordError
              ? 'error'
              : null}
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={this.OnChange}
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
            onChange={this.OnChange}
          />
          {passwordError
            ? <div className='error-message'>{passwordError}</div>
            : null}
          <Button className='pacific-blue authentication-button'>Register</Button>
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