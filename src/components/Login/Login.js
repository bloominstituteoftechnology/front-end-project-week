import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Button } from 'reactstrap'
import './Login.css'

// const serverURL = 'https://lambda-notes-server.herokuapp.com'
const serverURL = 'http://localhost:5000'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  render () {
    return (
      <div className='Login'>
        <h2>Login: </h2>
        <form onSubmit={this.submitHandler}>
          <div className='form-row'>
            <label>Username:</label>
            <input
              name='username'
              value={this.state.username}
              onChange={this.inputHandler}
              type='text'
            />
          </div>
          <div className='form-row'>
            <label>Password:</label>
            <input
              name='password'
              value={this.state.password}
              onChange={this.inputHandler}
              type='password'
            />
          </div>
          <div className='form-row'>
            <Button color='primary'>Login</Button>
          </div>
        </form>
      </div>
    )
  }

  inputHandler = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  submitHandler = (event) => {
    event.preventDefault()

    axios
      .post(`${serverURL}/api/login`, this.state)
      .then((response) => {
        this.props.onLogin(response.data)
        this.props.history.push('/')
      })
      .catch((err) => {
        console.log('ERROR You are not authorized', err)
      })
  }
}

export default withRouter(Login)
