import React from 'react'

class Login extends React.Component {
  constructor (props) {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  login = () => {
    window.localStorage.setItem('username', this.state.username)
    window.localStorage.setItem('password', this.state.password)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render () {
    return (
      <div className='login-container'>
        <div className='login'>
          <div className='login-header'>Log In</div>
          <form className='login-form' action='#' onSubmit={this.login}>
            <label className='login-label' htmlFor='username'>
              Email:
            </label>
            <input
              type='email'
              name='username'
              id='username'
              placeholder='Email'
              required
              autoComplete='off'
              onChange={this.handleChange}
              value={this.state.input}
            />

            <label className='login-label' htmlFor='password'>
              Password:{' '}
            </label>
            <input
              placeholder='Password'
              type='password'
              name='password'
              value={this.state.input}
              onChange={this.handleChange}
              id='password'
              required
            />

            <input type='submit' value='Login' />
          </form>
        </div>
      </div>
    )
  }
}
export default Login
