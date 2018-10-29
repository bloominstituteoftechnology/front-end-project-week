import React, { Component } from 'react';
import './App.css';
import NotesContainer from './components/NoteContainer/notesContainer';
import SideBar from './components/sidebar/sidebar';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>List View</h2>
        </header>
        <SideBar />
        <NotesContainer />
      </div>
    );
  }
}

export default App;
