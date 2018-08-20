import React from "react";
import "./ViewNote.css";
import { NavLink } from "react-router-dom";


const ViewNote = props => {
    console.log(props)
  const note = props.notes.find(note => `${note.id}` === props.match.params.id);
  if(!note ){
      return null
  }
  return (
    <div className="view-page">
    <div className="note-container">
    <div className="edit-delete">
      <NavLink className="ed" to={`/view-note/edit/${note.id}`}>
    Edit
    </NavLink>
    <NavLink className="ed"  to={`/view-note/delete/${note.id}`}>
    Delete
    </NavLink>
    </div>
      <div className="note-view-page">View Note</div>
      <div className="note-title">{note.title}</div>
      <p className="extended-content">{note.content}</p>
      </div>
    </div>
  );
};
export default ViewNote;
