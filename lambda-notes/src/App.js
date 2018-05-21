import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// Components
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <Navbar classes="col-md-3" />
          <NoteList classes="col-md-9" />
        </div>
      </div>
    );
  }
}

export default App;

/* Code I might want to keep around
  <img src={logo} className="App-logo" alt="logo" />
*/