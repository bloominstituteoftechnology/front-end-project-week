import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { AppContainer, Navigation, NotesListContainer } from "./components/styling/AppWideStyling";
import NotesList from "./components/functional/NotesList";
import NoteForm from "./components/functional/NoteForm";
import NoteView from "./components/functional/NoteView";

class App extends Component {
  render() {
    return (
      <AppContainer>

        <Navigation>
          <h1>Lambda Notes</h1>
          <Link to="/" className="navButton">
            View Your Notes
          </Link>
          <Link to="/noteform" className="navButton">
            + Create New Note
          </Link>
        </Navigation>

        <NotesListContainer>
          <Route exact path="/" component={NotesList} />
          <Route
            exact
            path="/noteform/:id?"
            render={props => <NoteForm {...props} />}
          />
          <Route path="/notes/:id" render={props => <NoteView {...props} />} />
        </NotesListContainer>

      </AppContainer>
    );
  }
}
export default App;