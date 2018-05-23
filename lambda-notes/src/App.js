import React, { Component, } from 'react';
// import logo from './logo.svg';
import './App.css';
import NotesList from './Notes/NotesList'

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="App-left">
          text
        </div>
        <div className='App-right'>
          <NotesList />
        </div>
      </div>

    );
  }
}

export default App;
