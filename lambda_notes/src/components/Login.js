import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }
  componentWillMount () {
    if (localStorage.authtoken) this.props.history.push('/')
  }
  render () {
    // console.log(localStorage)
    return (
      <form type='submit' onSubmit={this.submitHandler} className='form'>
        <div className='form-row'>
          <label> Username </label>
          <input
            name='username'
            value={this.state.username}
            onChange={this.inputHandler}
            type='text'
          />
        </div>
        <div className='form-row'>
          <label> Password </label>
          <input
            name='password'
            value={this.state.password}
            onChange={this.inputHandler}
            type='password'
          />
        </div>
        <div className='form-row'>
          <button type='submit'> Login </button>
        </div>
      </form>
    )
  }

  inputHandler = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  submitHandler = event => {
    event.preventDefault()
    axios
      .post('http://localhost:5000/api/login', this.state)
      .then(response => {
        console.log('response.data', response.data)
        this.props.onLogin(response.data)
        this.props.history.push('/')
      })
      .catch(err => {
        console.log('Error you are not authorized', err)
      })
  }
}

export default withRouter(Login)
