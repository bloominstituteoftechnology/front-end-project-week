import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'reactstrap'
import './Register.css'

// const serverURL = 'https://lambda-notes-server.herokuapp.com'
const serverURL = 'http://localhost:5000'

class Register extends React.Component {
  state = {
    username: '',
    password: ''
  }

  render () {
    return (
      <div className='Register'>
        <h2>Register:</h2>
        <form>
          <div className='form-row'>
            <label>Username</label>
            <input
              name='username'
              value={this.state.username}
              onChange={this.inputHandler}
              type='text'
            />
          </div>
          <div className='form-row'>
            <label>Password</label>
            <input
              name='password'
              value={this.state.password}
              onChange={this.inputHandler}
              type='password'
            />
          </div>
          <div className='form-row'>
            <Button color='success' onClick={this.submitHandler}>
              Register
            </Button>
          </div>
        </form>
      </div>
    )
  }

  inputHandler = ({ target }) => {
    // #inputHandler receives event object by default
    // #line48 destructures target from event
    const { name, value } = target
    this.setState({ [name]: value })
  }

  submitHandler = (event) => {
    event.preventDefault()
    axios
      .post(`${serverURL}/api/register`, this.state)
      .then((response) => {
        console.log(response.data)
        this.props.onRegister(response.data)
        this.props.history.push('/')
      })
      .catch((err) => {
        console.log('ERROR You are not authorized', err)
      })
  }
}

export default withRouter(Register)
