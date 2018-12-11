import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";

import { fetchNotes } from "./Actions";
import Navigation from "./Components/Navigation/Navigation.js";
import NoteList from "./Components/NoteList/NoteList.js";
import NoteForm from "./Components/NoteForm/NoteForm.js";
import Note from "./Components/Note/Note.js";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className="App">
        <div className="home-container">
          <Navigation />
          <div className="content-container">
            <Route
              exact
              path="/"
              render={props => <NoteList {...props} notes={this.props.notes} />}
            />

            <Route path="/add-note" render={props => <NoteForm {...props} />} />

            <Route
              exact
              path="/note/:id"
              render={props => <Note {...props} notes={this.props.notes} />}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchNotes }
  )(App)
);
