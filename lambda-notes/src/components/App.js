import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NoteList from '../containers/NoteList'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Switch>
          {/* <Route path='/new' component={NewNote} /> */}
          <Route exact path='/' component={NoteList} />
          {/* <Route path='/:id' component={NoteDetails} /> */}
        </Switch>
      </div>
    )
  }
}

export default App
