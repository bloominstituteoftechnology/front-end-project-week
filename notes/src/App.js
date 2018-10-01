import React, { Component } from "react";
import "./App.css";
import Menu from "./Components/Menu";
import NewNote from "./Components/NewNote";
import NoteList from "./Components/NoteList";
import { Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      notetitle: "",
      notebdy: "",
      id: null
    };
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <Route
          exact
          path="/"
          render={props => <NoteList {...props} notes={this.state.notes} />}
        />
      </div>
    );
  }
}

export default App;
