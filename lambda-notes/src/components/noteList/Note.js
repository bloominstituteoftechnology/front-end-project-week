import React from "react";

export const Note = props => {
  return (
    <div className="noteDiv">
      <h2>{props.note.title}</h2>
      <div className="noteDescription">
        <p>{props.note.description}</p>
      </div>
    </div>
  );
};
