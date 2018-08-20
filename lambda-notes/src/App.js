import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import NotesNav from './components/NotesNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NotesNav />
        <div className="main">
          SAMPLE
        </div>
      </div>
    );
  }
}

export default App;
