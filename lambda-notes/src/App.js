import React, { Component } from "react";
import Menu from "./Components/Menu";
import NoteList from "./Components/NoteList";
import NewNote from "./Components/NewNote";
import { Route } from "react-router-dom";
// import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      notetitle: "",
      notebody: "",
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
