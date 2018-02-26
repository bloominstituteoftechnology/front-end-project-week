import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import NotesList from './components/notes-list';
import dummyData from './dummy-data';

class App extends Component {
  state = {
    notes: dummyData,
  }
  render() {
    return (
      <div className="App-container" style={{ display: "flex", flexFlow: "row no-wrap", border: "2px solid black", height: "100%" }}>
        <Sidebar />
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
