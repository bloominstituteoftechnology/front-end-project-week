import React, { Component } from 'react';
import './App.css';
import Authenticate from './components/authenticate/authenticate.js';
import NotesContainer from './components/NoteContainer/notesContainer';
import SideBar from './components/sidebar/sidebar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <NotesContainer />
      </div>
    );
  }
}

export default Authenticate(App);
