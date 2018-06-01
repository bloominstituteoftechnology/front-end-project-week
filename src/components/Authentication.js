import React from 'react'
import { connect } from 'react-redux'
import ActionButton from './buttons/ActionButton'
import { registerUser, loginUser } from '../state/actions'

const Authentication = ({ registerUser, loginUser }) => {
  let username, password
  return (
    <div className="user-authentication">
      <input ref={node => username = node} placeholder="Username" />
      <input ref={node => password = node} placeholder="Password" />
      <div className="controls">
        <ActionButton 
          text='Sign up'
          onClick={() => registerUser(username.value, password.value)} />
        <ActionButton
          text='Log in'
          onClick={() => loginUser(username.value, password.value)} /
        <GithubButton />
      </div>
    </div>
  )
}

const mapDispatchToProps = { 
  registerUser,
  loginUser
}

export default connect(null, mapDispatchToProps)(Authentication)