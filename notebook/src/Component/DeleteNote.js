import React from "react";
import { Link } from "react-router-dom";

const DeleteNote = props => {
  return (
    <div className="delete-container">
      <h4>Are you sure you want to delete this?</h4>
      <button>DELETE</button>
      <button>NO</button>
    </div>
  );
};

export default DeleteNote;


// onClick={props