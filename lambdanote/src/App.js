import React, { Component } from 'react';
import './App.css';
import NoteList from './Components/NoteList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NoteList />
        </div>
      </div>
    );
  }
}

export default App;
