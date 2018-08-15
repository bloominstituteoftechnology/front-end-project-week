import React from 'react'

const Register = (props) => {
  return (
    <form type='submit' onSubmit={props.handleRegister}>
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
      <input
        placeholder='email'
        type='input'
        name='email'
        onChange={props.logInput}
        value={props.email}
        className='comment-input'
        required
      />
      <button type='submit'>Sign up</button>
    </form>
  )
}
export default Register
