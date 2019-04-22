import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import NavAuth from './NavAuth'
import NavNonAuth from './NavNonAuth'

class Navigation extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  logOut = () => {
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

    const { isOpen } = this.state

    return (
      TOKEN && USER_ID
        ? <NavAuth
          isOpen={isOpen}
          toggle={this.toggle}
          logOut={this.logOut}
        />
        : <NavNonAuth
          isOpen={isOpen}
          toggle={this.toggle}
        />
    )
  }
}

Navigation.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default withRouter(Navigation)
