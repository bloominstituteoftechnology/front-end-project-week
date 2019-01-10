import React, { Component } from 'react';
import './App.css';
import NotesSidebar from './components/NotesSidebar';
import NoteView from './components/NoteView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NotesSidebar/>
        <NoteView />
      </div>
    );
  }
}

export default App;
