import React from "react";

const Note = props => {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.textBody}</p>
    </div>
  );
};

export default Note;
