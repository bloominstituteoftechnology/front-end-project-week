import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import NotesListView from "./views/NotesListView";
import AddNoteView from "./views/AddNoteView";
import Note from "./components/Note";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="nav-header">Lambda Notes</h1>
          <div className="nav-links">
            <NavLink exact to="/">
              <button>View Your Notes</button>
            </NavLink>
            <NavLink to="/create-note">
              <button>+ Create New Note</button>
            </NavLink>
          </div>
        </nav>

        <Route exact path="/" component={NotesListView} />

        <Route path="/create-note" component={AddNoteView} />

        <Route path="/notes/:noteId" component={Note} />

        <Route
          path="/edit-note/:noteId"
          render={props => (
            <AddNoteView {...props} note={this.props.note} edit />
          )}
        />
      </div>
    );
  }
}

export default App;
