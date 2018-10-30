import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Notes from './components/Notes/Notes';
import data from './data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: data
    }
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Notes notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
