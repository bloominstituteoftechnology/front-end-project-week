import React from "react";
import { Link } from "react-router-dom";

export const CreateNote = props => {
  console.log("CreateNote Props", props);
  return (
    <div className="createNoteDiv">
      <form>
        <h1>Create New Note:</h1>
        <input placeholder="Note Title" />
        <input placeholder="Note Content" />
        <button>Save</button>
      </form>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};
