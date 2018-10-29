import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteNote } from "../actions";

const DeleteNote = props => {
  if (props.note) {
    const { id } = props.note;
    return (
      <div className="delete-page">
        <div className="delete-content">
          <h5 className="delete-msg">Are you sure you want to delete this?</h5>
          <div className="delete-buttons">
          <button onClick={() => props.deleteNote(id)} className="delete-btn-1">Delete</button>
          <Link to={`/${id}`}>
            <button className="delete-btn-2">No</button>  </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Note Deleted</p>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    note: state.notes.find(note => note.id === id)
  };
};

export default connect(
  mapStateToProps,
  { deleteNote }
)(DeleteNote);
