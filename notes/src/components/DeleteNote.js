import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteNote } from "../actions";

const DeleteNote = props => {
  if (props.note) {
    const { _id } = props.note;
    return (
      <div className="delete-page">
        <div className="delete-content">
          <h5 className="delete-msg">Are you sure you want to delete this?</h5>
          <div className="delete-buttons">
            <Link to="/">
              <button
                onClick={() => props.deleteNote(_id)}
                className="delete-btn-1"
              >
                Delete
              </button>
            </Link>
            <Link to={`/${_id}`}>
              <button className="delete-btn-2">No</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>All Notes Deleted</p>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    note: state.note.find(note => note._id === id)
  };
};

export default connect(
  mapStateToProps,
  { deleteNote }
)(DeleteNote);
