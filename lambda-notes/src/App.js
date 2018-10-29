import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import LeftBar from './components/LeftBar';
import NotesList from './components/NotesList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }
  render() {
    return (
      <div className="App">
        <Route path='/' component={LeftBar}/>
        <Route exact path='/' component={NotesList}/>
      </div>
    );
  }
}

export default App;
