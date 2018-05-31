import React from 'react'
import { connect } from 'react-redux'
import { registerUser, loginUser } from '../state/actions'

const Authentication = ({ registerUser, loginUser }) => {
  let username, password
  return (
    <div className="user-authentication">
      <input ref={node => username = node} placeholder="Username" />
      <input ref={node => password = node} placeholder="Password" />
      <button onClick={() => registerUser(username.value, password.value)}>
        Sign up
      </button>
      <button onClick={() => loginUser(username.value, password.value)}>
        Log in
      </button>
    </div>
  )
}

const mapDispatchToProps = { 
  registerUser,
  loginUser
}

export default connect(null, mapDispatchToProps)(Authentication)