import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import SideBar from './SideBar'
import NoteForm from './NoteForm'
import NoteView from './NoteView'
import NoteDisplay from './NoteDisplay'
import NoteEdit from './NoteEdit'
import './styles/App.css'

class App extends Component {
  render() {
    return (

      <div className="App">
        <SideBar />
        <div className="App-view">
          <Switch>
            <Route exact path='/' render={props => <NoteDisplay {...props} />} />
            <Route exact path='/note/:id' render={props => <NoteView {...props} />} />
            <Route path='/create' render={props => <NoteForm {...props} />} />
            <Route path='/note/:id/edit' render={props => <NoteEdit {...props} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
