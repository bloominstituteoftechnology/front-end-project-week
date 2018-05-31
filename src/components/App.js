import React, { Component } from 'react'
import { Route } from 'react-router'
import Sidebar from './Sidebar'
import NoteList from './note/NoteList'
import NoteDetail from './note/NoteDetail'
import NoteCreate from './note/NoteCreate'
import NoteEdit from './note/NoteEdit'

const App = () => (
  <div className="app">
    <Sidebar />
    <div className="main-container">
      <Route exact path='/' component={NoteList} />
      <Route path='/create' component={NoteCreate} />
      <Route path='/edit/:id' component={NoteEdit} />
      <Route path='/show/:id' component={NoteDetail} />
    </div>
  </div>
)

export default App