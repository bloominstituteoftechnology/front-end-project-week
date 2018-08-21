import React from "react";
import "./ViewNote.css";
import { NavLink, Link } from "react-router-dom";


const ViewNote = props => {
    console.log(props)
  const note = props.notes.find(note => `${note.id}` === props.match.params.id);
  if(!note ){
      return null
  }
  return (
    <div className="view-page">
    <div className="note-container">
    <div className={props.deleting ? "delete" : "hide-delete"}>
        <div className="delete-box">
          <p>Are you sure you want to delete this?</p>
          <div>
            <Link to="/">
              <div
                onClick={() => props.deleteNote(props.match.params.id)}
              >
                Delete
              </div>
            </Link>
            <Link to={`/view-note/${note.id}`}>
            <div onClick={props.deleteModal}>
              No
            </div>
            </Link>
          </div>
        </div>
      </div>
    <div className="edit-delete">
      <NavLink className="ed" to={`/view-note/edit/${note.id}`}>
    Edit
    </NavLink>
    <p className="ed" onClick={props.deleteBox}>delete</p>
    </div>
      <div className="note-view-page">View Note</div>
      <div className="note-title">{note.title}</div>
      <p className="extended-content">{note.content}</p>
      </div>
    </div>
  );
};
export default ViewNote;
