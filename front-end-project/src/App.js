import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NoteContainer from './components/NoteContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NoteContainer/>
      </div>
    );
  }
}

export default App;
