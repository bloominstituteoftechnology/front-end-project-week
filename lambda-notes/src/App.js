import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import NotesList from "./components/NotesList";
import Note from './components/Note.js';

class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <NotesList {...props} /> }/>
        <Route path="/note/get/:id" render={props => <Note {...props} /> }/>
      </div>
    );
  }
}

export default App;
