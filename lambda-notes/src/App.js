import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import {
  NavColumn,
  PrimaryContainer,
  NewNote,
  ViewNote
} from './components';


class App extends Component {

  render() {
    return (
      <div className="App__container">
        <NavColumn />
        <Route exact path="/" component={PrimaryContainer} />
        <Route path="/create" component={NewNote} />
        <Route path="/viewnote/:id" render={props => <ViewNote {...props} />} />
      </div>
    );
  }
}


export default App;