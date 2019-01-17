import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';

import LogIn from './components/auth/Login';
import Register from './components/auth/Register';
import NotesContainer from './components/NotesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LogIn} />
        <Route path="/signup" component={Register} />
        <Route path="/notes" component={NotesContainer} />
      </div>
    );
  }
}

export default withRouter(App);
