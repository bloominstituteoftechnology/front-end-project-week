import React from "react";

const Note = props => (
  <div className="note">
    <h3>{props.note.title}</h3>
    <hr />
    <p>{props.note.textBody}</p>
  </div>
);

export default Note;
