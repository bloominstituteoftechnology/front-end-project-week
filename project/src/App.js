import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import NoteList from './components/NoteList';
import { Route, Switch } from 'react-router-dom'
import NoteView from './components/NoteView'
import EditNote from './components/EditNote'
import AddNote from './components/AddNote'

class App extends Component {
  
 
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Switch>
          <Route exact path = '/' render = {()=><NoteList />} />
          <Route exact path = '/:id' render = {()=><NoteView />} />
          <Route exact path = '/:id/edit' render = {()=><EditNote />} />
          <Route exact path = '/note/new' render = {()=><AddNote />} />
        </Switch>
      </div>
    );
  }
}

export default App;
