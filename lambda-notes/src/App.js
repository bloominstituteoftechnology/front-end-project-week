import React, { Component } from 'react';
import PageNavigator from './components/PageNavigator';
import NoteItem from './components/NoteItem';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }
  render() {
    return (
      <div className="app-wrapper">
          <PageNavigator />
          <NoteItem />
      </div>
    );
  }
}

export default App;
