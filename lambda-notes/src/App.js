import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LeftColumn from './components/LeftColumn';
import NoteList from './components/NoteList';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <LeftColumn />
          <NoteList />
        </div>
      </Router>
    );
  }
}

export default App;
