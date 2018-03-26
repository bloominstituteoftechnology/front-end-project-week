import React, { Component, Fragment } from 'react';
import './App.css';

import Navigation from '../Navigation/Navigation';
import ListNotes from '../ListNotes/ListNotes';
import CreateNewNote from '../CreateNewNote/CreateNewNote';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="appContainer">
          <div className="navCol">
            <Navigation />
          </div>
          <div className="listCol">
            <Route exact path="/" component={ListNotes} />
            <Route path="/add" component={CreateNewNote} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
