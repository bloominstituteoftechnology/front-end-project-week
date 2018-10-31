import React, { Component } from "react";

import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import {
  DisplayNoteList,
  DisplayNote,
  AddNoteForm,
  DeleteNote,
  EditNote,
} from "../components/";
import { fetchNotes, addNote, deleteNote, editNote } from "../actions";

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

  render() {
    return (
      <div className="displayNotesView">

        <Route
          exact
          path="/"
          render={props => (
            <DisplayNoteList {...props} notes={this.props.notes} />
          )}
        />

        <Route
          exact
          path="/edit/:id"
          render={props => (
            <EditNote {...props}  notes={this.props.notes}
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
            <DeleteNote {...props}   notes={this.props.notes}
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
const mapStateToProps = ({ fetching, notes }) => {
  return { notes, fetching };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchNotes, addNote, deleteNote, editNote }
  )(DisplayNotesView)
);
