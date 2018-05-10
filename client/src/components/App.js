import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { history } from '../store'

import Sidebar from './Sidebar'
import NotesList from './NotesList'
import CreateNote from './CreateNote'
import NoteView from './NoteView'
import EditNote from './EditNote'
import DeleteNote from './DeleteNote'

import './App.css'

const App = props => (
  <ConnectedRouter history={history}>
    <div className="App">
      <Route path="/" component={Sidebar} />
      <Route exact path="/" component={NotesList} />
      <Route exact path="/create" component={CreateNote} />
      <Route exact path="/notes/:id" render={({ match: { params } }) =>
        <NoteView id={params.id} />} />
      <Route exact path="/notes/:id/edit" render={({ match: { params } }) =>
        <EditNote id={params.id} />} />
      <Route exact path="/notes/:id/delete" render={({ match: { params } }) =>
        <DeleteNote id={params.id} />} />
    </div>
  </ConnectedRouter>
)

export default App