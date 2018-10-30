import React, { Component } from 'react';
import './App.css';
import NotesContainer from './components/NoteContainer/notesContainer';
import SideBar from './components/sidebar/sidebar';

// import {Route } from 'react-router-dom';
// import Note from './components/NoteContainer/note';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>List View</h2>
        </header>
        <SideBar />
        <NotesContainer />
        {/* <Route path='/notes/:id' render={(OwnProps) =>{
          return(<Note {...OwnProps} />)
        }}/> */}
      </div>
    );
  }
}

export default App;
