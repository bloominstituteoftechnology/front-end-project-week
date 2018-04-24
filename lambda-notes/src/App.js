import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import {
  NavColumn,
  PrimaryContainer,
  NewNote,
  ViewNote,
  EditNote,
  Markdown
} from './components';

class App extends Component {
  render() {
    return (
      <div className="App__container">
        <NavColumn />
        <div className="ScrollOverflow">
          <Route exact path="/" component={PrimaryContainer} />
          <Route path="/create" component={NewNote} />
          <Route path="/viewnote/:id" render={props => <ViewNote {...props} />} />
          <Route path="/edit/:id" render={props => <EditNote {...props} />} />
          <Route path="/markdown" component={Markdown} />
        </div>
      </div>
    );
  }
}

export default App;