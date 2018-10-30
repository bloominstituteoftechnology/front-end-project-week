import React, { Component } from "react";
import Note from "./Note";
import "./Notes.css";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";
class Notes extends Component {
  state = {};
  render() {
    const { notes } = this.props;

    if (notes) {
      return (
        <React.Fragment>
          <div className="notes-container">
            <h1 className="your-notes">Your Notes:</h1>
            {notes.map(note => (
              <Note note={note} key={note.id} />
            ))}
          </div>
        </React.Fragment>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default compose(
  firestoreConnect([{ collection: "notes" }]),
  connect((state, props) => ({
    notes: state.firestore.ordered.notes
  }))
)(Notes);
