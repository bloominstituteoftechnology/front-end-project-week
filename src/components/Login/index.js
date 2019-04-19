import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import './index.css'

const URL = 'https://lambda-notes0706.herokuapp.com/api/auth/login'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      usernameOrEmail: '',
      password: '',
      invalid: null
    }
  }

    submitHandler = (event) => {
      event.preventDefault()
      const {
        usernameOrEmail,
        password
      } = this.state
      
      axios.post(URL, { username: usernameOrEmail, email: usernameOrEmail, password })
        .then(res => {
          if (res.data.token) {
            localStorage.setItem('jwt', res.data.token)
            localStorage.setItem('userId', res.data.id)
            this.props.history.push(`/${res.data.id}`)
          }
        })
        .catch(err => {
          if (err.response.status) {
            if (err.response.status === 401) {
              this.setState({ invalid: err.response.data })
            } else if (err.response.status === 400) {
              this.setState({ invalid: err.response.data[1] })
            } else {
              alert(`Error: ${err.response.status} ${err.response.data[1]}`)
            }
          } else {
            alert(`Error: ${err}`)
          }
        })
    }

    OnChange = (event) => {
      const {
        name,
        value
      } = event.target
      
      if (name === 'usernameOrEmail') {
        this.setState({
          [name]: value.replace(' ', '').toLowerCase(),
          invalid: null
        })
      } else {
        this.setState({
          [name]: value,
          invalid: null
        })
      }
    }
    
    render() {
      const {
        usernameOrEmail,
        password,
        invalid
      } = this.state
      return (
        <div className='login'>
          <form onSubmit={this.submitHandler}>
            <div>
              <input
                name='usernameOrEmail'
                type='text'
                placeholder='Username or Email'
                style={invalid
                  ? { borderBottom: '1.5px solid red' }
                  : { borderBottom: '1.5px solid #979797' }}
                onChange={this.OnChange}
                value={usernameOrEmail} />
              {invalid
                ? <div className='invalid'>{invalid}</div>
                : null}
            </div>
            <div className='secondDiv'>
              <input
                name='password'
                type='password'
                placeholder='Password'
                style={invalid
                  ? { borderBottom: '1.5px solid red' }
                  : { borderBottom: '1.5px solid #979797' }}
                onChange={this.OnChange}
                value={password} />
              {invalid
                ? <div className='invalid'>{invalid}</div>
                : null}
            </div>
            <div className='thirdDiv'>
              <button type='submit'>Log In</button>
            </div>
          </form>
        </div>
      )
    }
}

export default withRouter(Login) 