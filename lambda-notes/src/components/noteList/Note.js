import React from "react";

export const Note = props => {
  return (
    <div className="noteDiv">
      <h2>{props.note.title}</h2>
    </div>
  );
};
