import React, { Component } from "react";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";
import renderHTML from "react-render-html";

import "react-quill/dist/quill.snow.css";
import "./Notes.css";
class SingleNote extends Component {
  constructor() {
    super();
    this.state = {
      deleteMenuToggle: false
    };
  }

  // delete note
  handleDeleteNote = () => {
    const { note, firestore, history } = this.props;
    firestore
      .delete({ collection: "notes", doc: note.id })
      .then(history.push("/"));
  };

  render() {
    const { note } = this.props;

    if (note) {
      return (
        <React.Fragment>
          <div
            className="delete-modal"
            style={
              this.state.deleteMenuToggle
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <div className="delete-modal-wrapper">
              <div>
                <h5>Are you sure you want to delete this?</h5>
              </div>
              <div>
                <button onClick={this.handleDeleteNote}>Delete</button>
                <button
                  onClick={() => this.setState({ deleteMenuToggle: false })}
                >
                  No
                </button>
              </div>
            </div>
          </div>
          <div className="edit-and-delete">
            <span
              // links to edit page
              onClick={() => this.props.history.push(`/notes/${note.id}/edit`)}
            >
              <i className="fas fa-edit" />
              Edit
            </span>
            <span
              onClick={() =>
                this.setState({
                  // toggle mobile menu modal
                  deleteMenuToggle: !this.state.deleteMenuToggle
                })
              }
            >
              <i className="fas fa-trash-alt" />
              Delete
            </span>
          </div>
          <div className="single-note">
            <h1 className="note-title">{note.title}</h1>
            <div>{renderHTML(note.textBody)}</div>
          </div>
        </React.Fragment>
      );
    } else {
      return <Spinner />;
    }
  }
}

// connect to firebase
export default compose(
  firestoreConnect(props => [
    { collection: "notes", storeAs: "note", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    note: ordered.note && ordered.note[0]
  }))
)(SingleNote);
