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
        <nav className="nav-main">
          <h1 className="nav-header">Community Notes</h1>
          <div className="nav-links-container">
            <NavLink title="View Notes" className="nav-links" exact to="/">
              <i class="fas fa-sticky-note"></i>
            </NavLink>
            <NavLink title="Add Note" className="nav-links" to="/create-note">
              <i  class="fas fa-plus"></i>
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
