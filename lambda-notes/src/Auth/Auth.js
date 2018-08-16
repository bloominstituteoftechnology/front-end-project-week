import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import Register from './Register'
import Login from './Login'

const Authentication = (App) =>
  class extends Component {
    constructor () {
      super()
      this.state = {
        username: '',
        password: '',
        email: ''
      }
    }

    handleRegister = (e) => {
      e.preventDefault()
      console.log('METHOD')
      const { username, password, email } = this.state
      console.log(email)
      axios
        .post('http://localhost:8000/auth/register', {
          username,
          password,
          email
        })
        .then((response) => {
          localStorage.setItem('token', JSON.stringify(response.data.token))
          this.setState({ username: '', password: '', email: '' })
        })
        .catch((err) => console.log(err))
    }

    logInput = ({ target }) => {
      console.log('in here')
      const { name, value } = target

      this.setState({
        [name]: value
      })
    }

    render () {
      const token = localStorage.getItem('token')
      if (token) {
        return <App />
      } else {
        return (
          <div>
            <Route exact path='/' render={(props) => <Login {...props} />} />
            <Route
              path='/api/register'
              render={(props) => (
                <Register
                  username={this.state.username}
                  password={this.state.password}
                  email={this.state.email}
                  handleRegister={this.handleRegister}
                  logInput={this.logInput}
                />
              )}
            />
          </div>
        )
      }
    }
  }

export default Authentication
