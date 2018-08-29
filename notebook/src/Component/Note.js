import React from "react";
// import { Link } from "react-router-dom";

const Note = props => {
  return (
    <React.Fragment>
      <div>{props.note.title}</div>
      <div>{props.note.textBody}</div>
    </React.Fragment>
  );
};

export default Note;
