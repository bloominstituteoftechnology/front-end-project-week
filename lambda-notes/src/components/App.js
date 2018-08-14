import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NoteList from '../containers/NoteList'
import NewNote from '../containers/NewNote'
import SideNav from './SideNav'
import NoteDetails from '../containers/NoteDetails'
import NoMatch from './NoMatch'
import Authentication from '../Auth/Auth'
class App extends Component {
  constructor (props) {
    super(props)
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
  handleClear = () => {
    this.setState({ search: '' })
  }

  render () {
    console.log(this.state.search)
    return (
      <div className='App'>
        <SideNav
          logOut={this.props.logOut}
          getTag={this.getTag}
          handleClear={this.handleClear}
        />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <NoteList
                {...props}
                search={this.state.search}
                handleChange={this.handleChange}
                handleClear={this.handleClear}
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

export default Authentication(App)
