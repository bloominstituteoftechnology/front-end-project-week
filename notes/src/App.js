import React, { Component } from 'react';
import './App.css';
import NotesListView from './views/NotesListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NotesListView />
      </div>
    );
  }
}

export default App;
