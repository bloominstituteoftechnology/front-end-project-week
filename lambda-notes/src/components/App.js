import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NoteList from '../containers/NoteList'
import NewNote from '../containers/NewNote'
import SideNav from './SideNav'
import NoteDetails from '../containers/NoteDetails'
import NoMatch from './NoMatch'
class App extends Component {
  constructor () {
    super()
    this.state = {
      search: ''
    }
  }
  getTag = (tag) => {
    console.log(tag)
    this.setState({ search: tag })
  }
  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  render () {
    console.log(this.state.search)
    return (
      <div className='App'>
        <SideNav getTag={this.getTag} />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <NoteList
                {...props}
                search={this.state.search}
                handleChange={this.handleChange}
              />
            )}
          />
          <Route path='/notes/new' component={NewNote} />
          <Route path='/notes/:id' component={NoteDetails} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

export default App
