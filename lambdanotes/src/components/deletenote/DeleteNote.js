import React from "react";
import "./DeleteNote.css";

const DeleteNote = props => {
  return(
    <div className="delete-note">
      <div className="delete-choices">
        <button className="side-button delete-button">
          Delete
        </button>
        <button className="side-button">
          No
        </button>
      </div>
    </div>
  )
}

export default DeleteNote;
