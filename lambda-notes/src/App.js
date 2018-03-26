import React, { Component } from 'react';
import Note from './components/Note/Note';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        { title: 'Title1', content: 'Content1' },
        { title: 'Title2', content: 'Content2' }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="yourNotes">
          {this.state.notes.map((note, i) => (
            <Note key={i} index={i} title={note.title} content={note.content} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
