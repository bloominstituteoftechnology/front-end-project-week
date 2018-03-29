import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NotesPage from './components/NotesPage';
import SideNav from './components/SideNav';
import NoteForm from './components/NoteForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SideNav />
          <Route exact path="/" component={NotesPage} />
          <Route path="/NoteForm" component={NoteForm} />
        </div>
      </Router>
    );
  }
}

export default App;
