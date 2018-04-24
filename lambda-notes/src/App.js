import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import { Navigation } from './Components/Navigation';
import { NotesList } from './Components/NotesList';
import { LandingPage } from './Components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/Notes' component={NotesList} />
        </Switch>
      </div>
    );
  }
}

export default App;
