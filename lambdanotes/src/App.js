import React, { Component } from 'react';
import './App.css';
import NoteList from './Notes/noteList';
import notes from './Notes/notes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.setState({ notes });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="Name-header">Lambda Notes</h1>
        <button className="Button-view">View Your Notes</button>
        <button className="Button-create">+ Create New Note</button>
        </header>
        <div className="Notes-Body"><NoteList {...this.state} /></div>
      </div>
    );
  }
}

export default App;
