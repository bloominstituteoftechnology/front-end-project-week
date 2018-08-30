import React from "react";
import "../CSS/singlenote.css";
import { Link } from "react-router-dom";

const SingleNote = props => {
  const note = props.notes.find(note => note.id == props.match.params.id);
  return (
    <div className="single-note">
      <div className={props.deleting ? "delete-show" : "hide-delete"}>
        <div className="modal">
          <p>Are you sure you want to delete this?</p>
          <div className="buttons">
            <Link className="delete-link" to="/">
              <div
                onClick={() => props.noteDelete(props.match.params.id)}
                className="delete-button"
              >
                Delete
              </div>
            </Link>
            <div onClick={props.deleteModal} className="no-button">
              No
            </div>
          </div>
        </div>
      </div>

      <div className="delete">
        <Link
          className="editlink"
          to={`/notes/editnote/${props.match.params.id}`}
        >
          <p onClick={() => props.editHandler(props.match.params.id)}>edit</p>
        </Link>
        <p onClick={props.deleteModal}>delete</p>
      </div>
      <h1 className="single-title">{note.title}</h1>
      <div className="single-content">{note.text}</div>
    </div>
  );
};

export default SingleNote;
