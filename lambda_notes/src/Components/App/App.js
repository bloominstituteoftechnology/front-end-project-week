import React, { Component, Fragment } from 'react';
import './App.css';

import Navigation from '../Navigation/Navigation';
import ListNotes from '../ListNotes/ListNotes';
import CreateNewNote from '../CreateNewNote/CreateNewNote';
import NoteView from '../NoteView/NoteView';
import EditNote from '../EditNote/EditNote';
import Login from '../Login/Login';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  render() {
    return (
      <Fragment>
        <div className="appContainer">
          <div className="navCol">
            <Navigation notes={this.state.notes} />
          </div>
          <div className="listCol">
            <Route exact path="/" component={Login} />
            <Route
              exact
              path="/list"
              render={() => <ListNotes notes={this.state.notes} />}
            />
            <Route exact path="/add" component={CreateNewNote} />
            <Route exact path="/notes/:id" component={NoteView} />
            <Route exact path="/notes/:id/EditNote" component={EditNote} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
