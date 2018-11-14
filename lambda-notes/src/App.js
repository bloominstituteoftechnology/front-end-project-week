import React, { Component } from 'react';
import './App.css';

import NotesList from './components/notesList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='side-bar'>
            <h1>Lambda Notes</h1>
            <h3>View Your Notes</h3>
            <h3>+ Create New Note</h3> 
        </div>
        <div>
          <NotesList />
        </div>
      </div>
    );
  }
}

export default App;
