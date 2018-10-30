import React from "react";

const Note = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.textBody}</h3>
    </div>
  );
};

export default Note;
