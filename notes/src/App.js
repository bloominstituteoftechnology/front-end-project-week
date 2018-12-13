import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import NotesList from "./components/NewNotesList";
import Note from "./components/SingleNote";
import NoteForm from "./components/AddNote";
import { Link, Nav, AppWrapper } from "./styled/App";

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Nav>
          <h1>Lambda Notes</h1>
          <Link to="/notes">
            <span>View Your Notes</span>
          </Link>
          <Link to="/add-note">
            <span>+ Create New Note</span>
          </Link>
        </Nav>

        <Route exact path="/notes" render={props => <NotesList {...props} />} />
        <Route path="/notes/:id" render={props => <Note {...props} />} />
        <Route path="/add-note" render={props => <NoteForm {...props} />} />
        <Route
          path="/edit-note/:id"
          render={props => <NoteForm {...props} edit />}
        />
      </AppWrapper>
    );
  }
}

export default withRouter(App);
