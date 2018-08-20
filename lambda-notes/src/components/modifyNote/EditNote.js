import React from "react";
import { Link } from "react-router-dom";

export const EditNote = props => {
  console.log("EditNote Props", props);
  return (
    <div className="editNoteDiv">
      <form>
        <input placeholder="Note Title" />
        <input placeholder="Note Content" />
      </form>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};
