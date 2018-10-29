import React, { Component } from 'react';
import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NoteForm />
        <NoteList /> 

      </div>
    );
  }
}

export default App;
