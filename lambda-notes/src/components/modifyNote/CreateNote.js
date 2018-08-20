import React from "react";
import { Link } from "react-router-dom";

export const CreateNote = props => {
  console.log("CreateNote Props", props);
  console.log("CreateNote Props", props.noteTitle);
  return (
    <div className="createNoteDiv">
      <form>
        <h1>Create New Note:</h1>
        <input
          placeholder="Note Title"
          onChange={props.inputChangeHandler}
          name="noteTitle"
        />
        <input
          placeholder="Note Content"
          onChange={props.inputChangeHandler}
          name="noteDescription"
        />
        <button>Save</button>
      </form>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};
