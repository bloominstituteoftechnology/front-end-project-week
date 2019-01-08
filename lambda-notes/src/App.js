import React, { Component } from 'react';
import './App.css';
import NotesSidebar from './components/NotesSidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NotesSidebar/>
      </div>
    );
  }
}

export default App;
