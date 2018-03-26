import React, { Component } from 'react';

import ListNotes from './components/ListNotes/ListNotes';

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
        <ListNotes notes={this.state.notes}> </ListNotes>
      </div>
    );
  }
}

export default App;
