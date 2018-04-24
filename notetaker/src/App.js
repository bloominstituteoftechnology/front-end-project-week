import React, { Component } from "react";
import { Route } from "react-router";

import "./App.css";
import NoteList from "./components/NoteList/NoteList.js";
import CreateNote from "./components/CreateNote/CreateNote.js";
import Note from "./components/Note/Note.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      note: []
    };
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={NoteList} />
        <Route path="/CreateNote" component={CreateNote} />
        <Route path="/Note" component={Note} />
      </div>
    );
  }
}

export default App;