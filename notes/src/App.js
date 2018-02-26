import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LeftBar from './LeftBar/LeftBar';
import AllNotes from './AllNotes/AllNotes';
import SingleNote from './SingleNote/SingleNote';
import NewNote from './NewNote/NewNote';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <LeftBar />
          <Route path="/" component={AllNotes} exact />
          <Route path="/notes/:id" component={SingleNote} />
          <Route path="/new-note" component={NewNote} />
        </div>
      </Router>
    );
  }
}

export default App;
