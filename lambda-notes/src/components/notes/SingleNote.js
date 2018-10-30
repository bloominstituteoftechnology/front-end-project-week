import React, { Component } from "react";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";

class SingleNote extends Component {
  constructor() {
    super();
    this.state = {
      deleteMenuToggle: false
    };
  }
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
              onClick={() =>
                this.props.history.push(
                  `/notes/${localStorage.getItem("noteID")}/edit`
                )
              }
            >
              <i className="fas fa-edit" />
              Edit
            </span>
            <span
              onClick={() =>
                this.setState({
                  deleteMenuToggle: !this.state.deleteMenuToggle
                })
              }
            >
              <i className="fas fa-trash-alt" />
              Delete
            </span>
          </div>
          <div className="single-note">
            <h1>{note.title}</h1>
            <p>{note.textBody}</p>
          </div>
        </React.Fragment>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default compose(
  firestoreConnect(props => [
    { collection: "notes", storeAs: "note", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    note: ordered.note && ordered.note[0]
  }))
)(SingleNote);
