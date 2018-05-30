import React, { Component } from 'react'
import { Route } from 'react-router'
import { Sidebar, NotesList, NoteDetail, NoteCreate, NoteEdit } from '.'

const App = () => (
  <div className="app">
    <Sidebar />
    <div className="main-container">
      <Route exact path='/' component={NotesList} />
      <Route path='/create' component={NoteCreate} />
      <Route path='/edit/:id' component={NoteEdit} />
      <Route path='/show/:id' component={NoteDetail} />
    </div>
  </div>
)

export default App