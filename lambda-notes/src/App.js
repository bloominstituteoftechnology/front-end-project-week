import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import NoteList from './components/noteList'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1 className="App-title">Lambda Notes</h1>
          <NoteList />
        </div>
      </Router>
    );
  }
}

export default App;
