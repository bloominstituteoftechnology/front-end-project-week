import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Notes from '../Notes'
import CreateNote from '../CreateNote/'
import Note from '../Note/'
import EditNote from '../EditNote/'

import './index.css'

const AuthRoutes = () => (
  <div className='content'>
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
    {window.location.pathname === '/'
      ? <Redirect to={`/${localStorage.getItem('userId')}`} />
      : null}
  </div>
)

export default AuthRoutes
