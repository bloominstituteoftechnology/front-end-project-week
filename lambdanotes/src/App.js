import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import NotesList from './components/notes-list';

class App extends Component {
  render() {
    return (
      <div className="App-container" style={{ display: "flex", flexFlow: "row no-wrap", border: "2px solid black", height: "700px"}}>
        <Sidebar />
        <NotesList />
      </div>
    );
  }
}

export default App;
