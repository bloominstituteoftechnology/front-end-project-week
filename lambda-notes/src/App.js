import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import { Navigation } from './Components/Navigation';
import { NotesList } from './Components/NotesList';
import { LandingPage } from './Components/LandingPage';
import { AddNote } from './Components/AddNote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/notes' component={NotesList} />
          <Route exact path='/addnote' component={AddNote} />
          {/* <Route path='/notes/:id' render={null}/>
          <Route exact path='/notes' render={props => <NotesList {...props}/>} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
