import React from "react";
import { Link } from "react-router-dom";

const DeleteNote = props => {
  return (
    <div className="delete-container">
      <h4>Are you sure you want to delete this?</h4>
      
      {/* Delete Function handler goes here */}
      <Link to={"/"}>
        <button>DELETE</button>
      </Link>
      <Link to={`/notes/${props._id}`}>
        <button>NO</button>
      </Link>
    </div>
  );
};

export default DeleteNote;
