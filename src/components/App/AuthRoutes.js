import React from 'react'
import { Route } from 'react-router-dom'

import Notes from '../Notes'
import CreateNote from '../CreateNote/'
import Note from '../Note/'
import EditNote from '../EditNote/'

import './index.css'

const AuthRoutes = () => (
  <div id='content-cont'>
    <Route
      exact path='/'
      component={Notes} />
    <Route
      exact path='/createnote'
      component={CreateNote} />
    <Route
      exact path='/:noteId'
      component={Note} />
    <Route
      exact path='/:noteId/editnote'
      component={EditNote} />
  </div>
)

export default AuthRoutes
