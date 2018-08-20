import React from "react";
import { Link } from "react-router-dom";

export const DeleteNote = props => {
  console.log("DeleteNote Props", props);
  return (
    <div className="deleteNoteDiv">
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};
