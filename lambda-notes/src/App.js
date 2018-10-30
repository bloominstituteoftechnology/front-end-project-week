import React, { Component } from "react";

import { Route, NavLink } from "react-router-dom";
import "./App.css";

import SideBar from "./components/side-bar";
import NoteList from "./components/note-list";
import NoteForm from "./components/note-form";
import Note from "./components/note";
import NoteDetails from "./components/note-details";

class App extends Component {
  onSubmitHelper = e => {
    e.preventDefault();
    this.setState({ notes: this.state.notes });
  };

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={() => <SideBar onSubmitHelper={this.onSubmitHelper} />}
        />
        <Route exact path="/notes" component={NoteList} />
        <Route
          path="/note-form"
          render={() => <NoteForm onSubmitHelper={this.onSubmitHelper} />}
        />
        <Route path="/note-details/:_id" component={NoteDetails} />
      </div>
    );
  }
}

export default App;
