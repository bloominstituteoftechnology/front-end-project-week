import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import ListView from './components/ListView/ListView';
import CreateNewNote from './components/CreateNewNote/CreateNewNote';

import './App.css';

class App extends Component {
  render() {
    return (
      <div class='container row'>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={ListView} /> {/* Should call notebook list view? */}
        {/* <Router path='/note-view' component={NoteView} */}
        <Route path='/create-new-note' component={CreateNewNote} />
        {/* <Router path='/note-view/edit' component={EditNote} */}
      </div>
    );
  }
}

export default App;
