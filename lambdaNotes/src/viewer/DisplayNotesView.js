import React, { Component } from "react";

import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import {
  DisplayNoteList,
  DisplayNote,
  AddNoteForm,
  DeleteNote,
  EditNote
} from "../components/";
import {
  fetchNotes,
  addNote,
  deleteNote,
  editNote,
  setSearchBoolean
} from "../actions";

// this is view component that manage main display area
// it has most of logics and also manage all route component

class DisplayNotesView extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  submitAdd = note => {
    this.props.addNote(note);
  };

  submitEdit = editedNote => {
    this.props.editNote(editedNote);
  };

  submitdelete = deleteId => {
    this.props.deleteNote(deleteId);
  };

  handleSearchBoolean = bool => {
    this.props.setSearchBoolean(bool);
  };

  render() {
    return (
      <div className="displayNotesView">
        <Route
          exact
          path="/"
          render={props => (
            <DisplayNoteList
              {...props}
              notes={this.props.notes}
              isSearched={this.props.isSearched}
              handleSearchBoolean={this.handleSearchBoolean}
            />
          )}
        />

        <Route
          exact
          path="/edit/:id"
          render={props => (
            <EditNote
              {...props}
              notes={this.props.notes}
              submitEdit={this.submitEdit}
            />
          )}
        />

        <Route
          path="/Notes/:id"
          render={props => <DisplayNote {...props} notes={this.props.notes} />}
        />

        <Route
          exact
          path="/Notes/:id/delete"
          render={props => (
            <DeleteNote
              {...props}
              notes={this.props.notes}
              submitdelete={this.submitdelete}
            />
          )}
        />

        <Route
          exact
          path="/addNote"
          render={props => (
            <AddNoteForm {...props} submitAdd={this.submitAdd} />
          )}
        />
      </div>
    );
  }
}

// gets the state and map them to props
const mapStateToProps = ({ fetching, notes, isSearched }) => {
  return { notes, fetching, isSearched };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchNotes, addNote, deleteNote, editNote, setSearchBoolean }
  )(DisplayNotesView)
);
