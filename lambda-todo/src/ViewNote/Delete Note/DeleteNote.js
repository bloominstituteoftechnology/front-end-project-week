import React from "react";
import { NavLink } from "react-router-dom";
const DeleteNote = props => {
  const note = props.notes.find(note => `${note.id}` === props.match.params.id);
  if (!note) {
    return null;
  }
  return (
    <div className={props.deleing ? "delete" : "hide-delete"}>
      <div className="delete-box">
        <p>Are you sure you want to delete this?</p>
        <NavLink to="/">
          <div onClick={() => props.handleDelete(props.match.params.id)}>
            Delete
          </div>
        </NavLink>
        <NavLink to="/view-note/:id">
          <div onClick={props.deleteNote}>Cancel</div>
        </NavLink>
      </div>
    </div>
  );
};
export default DeleteNote;
