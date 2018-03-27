import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LeftColumn from './components/LeftColumn';
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={LeftColumn} />
          <Route exact path="/" component={NoteList} />
          <Route exact path="/createnote" component={CreateNote} />
        </div>
      </Router>
    );
  }
}

export default App;
