import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import NotesList from "./components/NotesList";
import Note from "./components/SingleNote";
import NoteForm from "./components/AddNote";
import { Link, Nav, AppWrapper, WelcomeBanner } from "./styled/App";

import axios from "axios";
import Fuse from "fuse.js";
import { connect } from "react-redux";
import { saveNote, editNote, deleteNote, filterNotes } from "./actions";

export const API = "https://fe-notes.herokuapp.com/note";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      filtered: [],
      hidden: false
    };
  }

  hide = () => {
    this.setState({ hidden: true });
  };

  reset = () => {
    this.setState({ filtered: [] });
  };

  getState = info => {
    this.setState({ notes: info });
  };

  // addNote = data => {
  //   axios.post(`${API}/create`, data).then(res => {
  //     return axios
  //       .get(`${API}/get/all`)
  //       .then(res => this.setState({ notes: res.data, filtered: [] }))
  //       .catch(err => console.log(err));
  //   });
  // };

  // deleteNote = id => {
  //   axios.delete(`${API}/delete/${id}`).then(res => {
  //     return axios
  //       .get(`${API}/get/all`)
  //       .then(res => this.setState({ notes: res.data, filtered: [] }))
  //       .catch(err => console.error(err));
  //   });
  // };

  // editNote = (data, id) => {
  //   axios
  //     .put(`${API}/edit/${id}`, data)
  //     .then(res => {
  //       return axios
  //         .get(`${API}/get/all`)
  //         .then(res => this.setState({ notes: res.data, filtered: [] }))
  //         .catch(err => console.error(err));
  //     })
  //     .catch(err => console.error(err));
  // };

  searchFilter = e => {
    var options = {
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 0,
      keys: ["title"]
    };
    var fuse = new Fuse(this.state.notes, options);
    var result = fuse.search(e.target.value);
    this.setState({ filtered: result });
  };

  render() {
    const { filtered, notes } = this.state;
    return (
      <AppWrapper>
        <Nav>
          <h1>Lambda Notes</h1>
          <Link to="/notes" onClick={this.hide}>
            <span>View Your Notes</span>
          </Link>
          <Link to="/add-note" onClick={this.hide}>
            <span>+ Create New Note</span>
          </Link>
        </Nav>
        {!this.state.hidden && (
          <WelcomeBanner>WELCOME TO LAMBDA NOTES BABYYYY</WelcomeBanner>
        )}

        <Route
          exact
          path="/notes"
          render={props => (
            <NotesList
              {...props}
              notes={filtered.length > 0 ? filtered : notes}
              search={this.searchFilter}
              reset={this.reset}
              get={this.getState}
            />
          )}
        />
        <Route
          exact
          path="/notes/:id"
          render={props => (
            <Note
              {...props}
              notes={filtered.length > 0 ? filtered : notes}
              delete={this.props.deleteNote}
            />
          )}
        />
        <Route
          exact
          path="/add-note"
          render={props => (
            <NoteForm {...props} saveNote={this.props.saveNote} />
          )}
        />
        <Route
          exact
          path="/edit-note/:id"
          render={props => (
            <NoteForm
              {...props}
              notes={filtered.length > 0 ? filtered : notes}
              editNote={this.props.editNote}
              edit
            />
          )}
        />
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    note: state.note,
    filtered: state.filtered
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { saveNote, editNote, deleteNote, filterNotes }
  )(App)
);
