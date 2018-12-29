 import React from "react";
import { connect } from "react-redux";
import { deleteNote } from "../../Actions";

import "./DeleteNote.css";

const DeleteNote = props => {
  if (props.isVisible) {
    return (
      <div className="delete-container">
      <div className="delete-modal">
        <p className="delete-message">Are you sure you want to delete this?</p>
        <div className="button-row">
          <div
            className="btn delete"
            onClick={() => {
              props.deleteNote(props.note._id);
              props.history.push("/");
            }}
          >
            Delete
          </div>
          <div className="btn" onClick={props.toggleDelete}>
            No
          </div>
        </div>
      </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default connect(
  null,
  { deleteNote }
)(DeleteNote);
