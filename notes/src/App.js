import React, { Component } from 'react';


import NavBar from './components/NavBar';
import Note from './components/Note'
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
        <div className = "all-notes">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        </div>
      </div>
    );
  }
}

export default App;
