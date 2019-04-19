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
    return (
      <div className="App">
        <Navigation />
        {localStorage.getItem('jwt') && localStorage.getItem('userId')
          ? <Route exact path='/:userId' component={Notes} /> 
          : <Route exact path='/' component={About} />}
        {localStorage.getItem('jwt') && localStorage.getItem('userId')
          ? null
          : <Route exact path='/signup' component={Signup} />}
        {localStorage.getItem('jwt') && localStorage.getItem('userId')
          ? null
          : <Route exact path='/login' component={Login} />}
        {localStorage.getItem('jwt') && localStorage.getItem('userId')
          ? <Route exact path='/:userId/createnote' component={CreateNote} /> 
          : null}
        {localStorage.getItem('jwt') && localStorage.getItem('userId')
          ? <Route exact path='/:userId/notes/:noteId' component={Note} />
          : null}
        {localStorage.getItem('jwt') && localStorage.getItem('userId')
          ? <Route exact path='/:userId/notes/:noteId/editnote' component={EditNote} />
          : null}
        {localStorage.getItem('jwt') && localStorage.getItem('userId') && window.location.pathname === '/'
          ? <Redirect to={`/${localStorage.getItem('userId')}`} />
          : null}
      </div>
    )
  }
}

export default App
