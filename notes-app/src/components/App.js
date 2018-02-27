import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './NavBar';
import ViewNotes from './ViewNotes';
import CreateNote from './CreateNote'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Nav />
          <Route path="/" component={ViewNotes} exact />
          <Route path="/viewnotes" component={ViewNotes} exact />
          <Route path="/createnote" component={CreateNote} exact />
        </div>
      </Router>
    );
  }

}

export default App;
