import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from './Login'

const Authentication = (App) =>
  class extends Component {
    render () {
      const token = localStorage.getItem('token')
      if (token) {
        return <App />
      } else {
        return (
          <div>
            <Route exact path='/' component={Login} />
          </div>
        )
      }
    }
  }

export default Authentication
