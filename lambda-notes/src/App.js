import React, { Component } from 'react';
import './App.css';
import NotesContainer from './components/NotesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NotesContainer />
      </div>
    );
  }
}

export default App;
