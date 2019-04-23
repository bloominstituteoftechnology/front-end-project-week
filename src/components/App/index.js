import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import Navigation from '../Navigation/'
import About from '../About/'
import Signup from '../Signup/'
import Login from '../Login/'
import Notes from '../Notes'
import CreateNote from '../CreateNote/'
import Note from '../Note/'
import EditNote from '../EditNote/'

import './index.css'

class App extends Component {
  render() {
    const TOKEN = localStorage.getItem('jwt')
    const USER_ID = localStorage.getItem('userId')
    return (
      <div className="app">
        <Navigation />
        {TOKEN && USER_ID
          ? <div className='content'>
            <Route
              exact path='/:userId'
              component={Notes} />
            <Route
              exact path='/:userId/createnote'
              component={CreateNote} />
            <Route
              exact path='/:userId/notes/:noteId'
              component={Note} />
            <Route
              exact path='/:userId/notes/:noteId/editnote'
              component={EditNote} />
          </div>
          : <div className='content'>
            <Route
              exact path='/'
              component={About} />
            <Route
              exact path='/signup'
              component={Signup} />
            <Route
              exact path='/login'
              component={Login} />
          </div>}
        {TOKEN && USER_ID && window.location.pathname === '/'
          ? <Redirect to={`/${localStorage.getItem('userId')}`} />
          : null}
      </div>
    )
  }
}

export default App
