import React, { Component } from 'react';


import NavBar from './components/NavBar';
import NotesList from './components/NotesList'
import './App.css';

//initial state set up:
// {
//   "tags": ["tag", "otherTag"],
//   "title": "Note Title",
//   "textBody": "Note Body",
// }


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />

        <NotesList />

      </div>
    );
  }
}

export default App;
