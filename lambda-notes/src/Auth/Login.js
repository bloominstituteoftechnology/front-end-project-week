import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {
  return (
    <div>
      <form type='submit' onSubmit={props.handleLogin}>
        <input
          placeholder='username'
          type='text'
          name='username'
          onChange={props.logInput}
          value={props.username}
          className='comment-input'
          required
        />
        <input
          placeholder='Password'
          type='password'
          name='password'
          onChange={props.logInput}
          value={props.password}
          className='comment-input'
          required
        />
        <button type='submit'>Log in</button>
      </form>
      <Link to='/api/register'>Or Register</Link>
    </div>
  )
}

export default Login
