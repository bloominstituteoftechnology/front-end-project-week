import React from "react";
import { Link } from "react-router-dom";

export const EditNote = props => {
  console.log("EditNote Props", props);
  return (
    <div className="editNoteDiv">
      <h1>Edit Note:</h1>
      <form onSubmit={props.modifyNoteHandler}>
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
        <button>Update</button>
      </form>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};
