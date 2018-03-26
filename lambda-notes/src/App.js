import React, { Component } from 'react';

import ListNotes from './components/ListNotes/ListNotes';

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

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
        <Navbar />
        <ListNotes notes={this.state.notes}> </ListNotes>
      </div>
    );
  }
}

export default App;
