import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NoteList from './components/Notes/ListView';
import Menu from './components/Menu/Menu';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Menu />
        <Switch>
          <Route
            exact
            path="/"
            component={NoteList}
            noteList={this.state.noteList}
          />
          {/* <Route path="/:id" component={Note} /> */}
          {/*<Route path="/update" component={EditView} /> */}
          <Route
            render={() => <h1>Please do not attempt to feed the animals.</h1>}
          />
        </Switch>
      </div>
    );
  }
}
