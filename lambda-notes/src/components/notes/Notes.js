import React, { Component } from "react";
import Note from "./Note";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class Notes extends Component {
  state = {};
  render() {
    const { notes } = this.props;

    if (notes) {
      return (
        <div>
          {notes.map(note => (
            <Note note={note} key={note.id} />
          ))}
        </div>
      );
    } else {
      return <h1>loading...</h1>;
    }
  }
}

export default compose(
  firestoreConnect([{ collection: "notes" }]),
  connect((state, props) => ({
    notes: state.firestore.ordered.notes
  }))
)(Notes);
