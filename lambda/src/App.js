import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { notes } from './components/notes.js';
import NotesList from './components/NotesList';
import { SideBar } from './components/SideBar';
import CreateNote from './components/CreateNote';
import { EditNote } from './components/EditNote';

class App extends Component {
 
  render() {
    return (
      <div className="App">
          <SideBar className="sideBar" />
          <Route exact path="/" component={NotesList} />
          <Route path="/create" component={CreateNote} />
          {/* <EditNote className="editNote" /> */}
      </div>
    );
  }
}

export default App;
