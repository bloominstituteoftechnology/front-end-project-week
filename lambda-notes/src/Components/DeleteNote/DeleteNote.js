import React from "react";

import "./DeleteNote.css";

const DeleteNote = () => {
  return (
    <div className="delete-modal">
      <p className="delete-message">"Are you sure you want to delete this?"</p>
      <div className="button-row">
        <div className="btn delete">Delete</div>
        <div className="btn">No</div>
      </div>
    </div>
  );
};

export default DeleteNote;
