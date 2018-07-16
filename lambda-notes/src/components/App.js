import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NoteList from '../containers/NoteList'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Switch>
          <Route path='/' component={NoteList} />
        </Switch>
      </div>
    )
  }
}

export default App
