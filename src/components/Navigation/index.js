import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import './index.css'

class Navigation extends Component {
  logout = () => {
    const TOKEN = localStorage.getItem('jwt')

    if (TOKEN) {
      localStorage.removeItem('jwt')
      localStorage.removeItem('userId')
      this.props.history.push('/')
    }
  }

  render() {
    const USER_ID = localStorage.getItem('userId')

    const TOKEN = localStorage.getItem('jwt')

    return (
      <div className='navigation'>
        {TOKEN && USER_ID
          ? <Link to={`/${USER_ID}`}>
            <h1>Lambda</h1>
            <h1>Notes</h1>
          </Link> 
          : <Link to='/'>
            <h1>Lambda</h1>
            <h1>Notes</h1>
          </Link>}
        {TOKEN && USER_ID
          ? <Link to={`/${USER_ID}`}>
            <button>View Your Notes</button>
          </Link>
          : <Link to='/signup'>
            <button>Sign Up</button>
          </Link>}
        {TOKEN && USER_ID
          ? <Link to={`/${USER_ID}/createnote`}>
            <button>+ Create New Note</button></Link>
          : <Link to='/login'>
            <button>Log In</button>
          </Link>}
        {TOKEN && USER_ID
          ? <button
            className='logout'
            onClick={this.logout}>Log Out</button>
          : null}
      </div>
    )
  }
}

export default withRouter(Navigation)
