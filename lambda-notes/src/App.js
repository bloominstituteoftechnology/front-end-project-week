import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import NoteList from './Components/NoteList';


class App extends Component {
  render() {
    return (
      <div className="App">
       <NoteList />
      </div>
    );
  }
}

export default App;
