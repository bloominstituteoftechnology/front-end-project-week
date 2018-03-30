import React from "react";
import { Link } from "react-router-dom";

export const ViewNote = props => {
  // display a maximized version of the title and content of note clicked
  console.log(props);

  return (
    <div>
      <div className="updateButtons">
        <Link to={`/editnote/${props.notes.id}`}>
          <button> Edit Note </button>
        </Link>
        <Link to="/">
        <button onClick={() => props.deleteNote(props.notes.id)}> Delete Note </button>
        </Link>

      </div>
      <h1> {props.notes.title} </h1>
      <div>{props.notes.content}</div>
    </div>
  );
};
