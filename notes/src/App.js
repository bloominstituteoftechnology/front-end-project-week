import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import NoteList from './Components/NoteList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Sidebar />
      <NoteList />
      </div>
    );
  }
}

export default App;
