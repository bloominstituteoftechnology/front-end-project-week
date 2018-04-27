import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import {
  NavColumn,
  PrimaryContainer,
  NewNote,
  ViewNote,
  EditNote,
  Markdown,
  DragSort,
  Login
} from './components';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App__container">
        <NavColumn />
        <div className="ScrollOverflow">
          <Route exact path="/" component={Login} />
          <Route path ="/home" component={PrimaryContainer} />
          {/* <Route path="/home" component={DragSort} /> */}
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