import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NoteList from '../containers/NoteList'
import NewNote from '../containers/NewNote'
import SideNav from './SideNav'
import NoteDetails from '../containers/NoteDetails'
import NoMatch from './NoMatch'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <SideNav />
        <Switch>
          <Route exact path='/' component={NoteList} />
          <Route path='/notes/new' component={NewNote} />
          <Route path='/notes/:id' component={NoteDetails} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}
export default App
