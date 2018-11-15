import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Nav from './Components/Nav/Nav';
import Notes from './Components/NoteList/Notes';
import Note from './Components/Note/Note';

/* Main entry point for the Lambda Notes app.
 * This will primarily contains the routes needed for our app
 */

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Notes} />
        <Route path="/note/:id" component={Note} />
        <Route path="/edit/:id" component="" />
        <Route path="/add" component="" />
      </div>
    );
  }
}

export default App;
