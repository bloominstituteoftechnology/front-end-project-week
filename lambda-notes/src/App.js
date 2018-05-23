import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {Switch} from 'react-router';

import './App.css';
import NotesContainer from './components/NotesContainer/NotesContainer';
import SideNav from './components/SideNav/SideNav';
import NewNote from './components/NewNote/NewNote';
import NoteView from './components/NoteView/NoteView';
import EditNote from './components/EditNote/EditNote';


class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Route path="/" component={SideNav} />
        <Route exact path="/" component={NotesContainer} />
        <Route path="/create" component={NewNote} />
        <Route path="/note/:id" component={NoteView}/>
        <Route path="/note/:id/edit" component={EditNote}/>
      </div>
      
    );
  }
}

export default App;
