import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"

import SideNav from './components/SideNav';
import ListView from './components/ListView';
import NoteView from './components/NoteView';
import CreateNote from './components/CreateNote';

import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <Switch>
          <Route exact path = '/' component={ListView} />
          <Route path = '/CreateNote' component={CreateNote} />
          <Route path = '/NoteView' component={NoteView} />
        </Switch>
      </div>
    );
  }
}

// export default App;
