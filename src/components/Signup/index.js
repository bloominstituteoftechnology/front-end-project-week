import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

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
        <div className='signup'>
          <form onSubmit={this.submitHandler}>
            <div>
              <input
                name='firstname'
                type='text' 
                placeholder='First Name'
                style={this.state.firstnameError
                  ? { borderBottom: '1.5px solid red' }
                  : { borderBottom: '1.5px solid #979797' }}
                onChange={this.OnChange}
                value={firstname} />
              {firstnameError
                ? <div className='firstnameError'>{firstnameError}</div>
                : null}
            </div>
            <div>
              <input
                name='lastname'
                type='text'
                placeholder='Last Name'
                style={this.state.lastnameError
                  ? { borderBottom: '1.5px solid red' }
                  : { borderBottom: '1.5px solid #979797' }}
                onChange={this.OnChange}
                value={lastname} />
              {lastnameError
                ? <div className='lastnameError'>{lastnameError}</div>
                : null}
            </div>
            <div>
              <input
                name='email'
                type='text'
                placeholder='Email'
                style={emailError
                  ? { borderBottom: '1.5px solid red' }
                  : { borderBottom: '1.5px solid #979797' }}
                onChange={this.OnChange}
                value={email} />
              {emailError
                ? <div className='emailError'>{emailError}</div>
                : null}
            </div>
            <div>
              <input
                name='username'
                type='text'
                onChange={this.OnChange}
                placeholder='Username'
                style={usernameError
                  ? { borderBottom: '1.5px solid red' }
                  : { borderBottom: '1.5px solid #979797' }}
                value={username} />
              {usernameError
                ? <div className='usernameError'>{usernameError}</div>
                : null}
            </div>
            <div>
              <input
                name='password'
                type='password'
                placeholder='Password'
                style={passwordError
                  ? { borderBottom: '1.5px solid red' }
                  : { borderBottom: '1.5px solid #979797' }}
                onChange={this.OnChange}
                value={password} />
              {passwordError
                ? <div className='passwordError'>{passwordError}</div>
                : null}
            </div>
            <div>
              <input
                name='passwordMatch'
                type='password'
                placeholder='Confirm Password'
                style={passwordError
                  ? { borderBottom: '1.5px solid red' }
                  : { borderBottom: '1.5px solid #979797' }}
                onChange={this.OnChange}
                value={passwordMatch} />
              {passwordError
                ? <div className='passwordError'>{passwordError}</div>
                : null}
            </div>
            <div className='submitButton'>
              <button type='submit'>Sign Up</button>
            </div>
          </form>
        </div>
      )
    }
}

export default withRouter(Signup) 