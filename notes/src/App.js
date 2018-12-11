import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import NotesListView from "./views/NotesListView";
import AddNoteView from "./views/AddNoteView";
import Note from "./components/Note";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state={
      loggedIn: false
    };
  }
  render() {
    return (
      <div className="App">
        <nav className="nav-main">
          <h1 className="nav-header">Lambda Notes</h1>
          <div className="nav-links-container">
            <NavLink className="nav-links" exact to="/">
              <button className="nav-main-btn">View Your Notes</button>
            </NavLink>
            <NavLink to="/create-note">
              <button className="nav-main-btn">+ Create New Note</button>
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
