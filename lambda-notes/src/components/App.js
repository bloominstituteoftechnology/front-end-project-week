import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { SideBar } from './SideBar';
import NotesList from './NotesList';
import CreateNote from './CreateNote'

class App extends Component {
 
  render() {
    return (
      <div className="App">
          <SideBar className="sideBar" />
          <Route exact path="/" component={NotesList} />
          <Route path="/create" component={CreateNote} />
      </div>
    );
  }
}

export default App;
