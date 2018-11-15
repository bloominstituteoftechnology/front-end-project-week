import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import Nav from './Components/Nav/Nav';
import Notes from './Components/NoteList/Notes';

/* Main entry point for the Lambda Notes app.
 * This will primarily contains the routes needed for our app, along with
 * app links
 */

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Nav} />
        <Route path="/" component={Notes} />
        <Route path="/note/:id" component="" />
        <Route path="/edit/:id" component="" />
        <Route path="/add" component="" />
      </div>
    );
  }
}

export default App;
