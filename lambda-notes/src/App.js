import React, { Component } from "react";
import { Route } from "react-router-dom";

import NotesList from "./components/NotesList";
import Note from './components/Note.js';
import EditNote from "./components/EditNote";
import AddNote from "./components/AddNote";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <NotesList {...props} /> }/>
        <Route path="/note/get/:id" render={props => <Note {...props} /> }/>
        <Route path="/note/create" render={props => <AddNote {...props} /> } />
        <Route path="/note/edit/:id" render={props => <EditNote {...props} /> } />
      </div>
    );
  }
}

export default App;
