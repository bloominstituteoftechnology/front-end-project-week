import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import NoteList from './components/noteList';
import EditNote from './components/editNote';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1 className="App-title">Lambda Notes</h1>
          {/* <NoteList /> */}
          {/* <EditNote /> */}
          <Route path="/" component={NoteList} />
          {/* <Route path="/notes/:id" component={} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
