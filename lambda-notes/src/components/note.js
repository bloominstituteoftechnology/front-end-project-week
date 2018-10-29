import React from "react";

const Note = props => {
  return (
    <div className="noteCard">
      <h3>{props.title}</h3>
      <p>{props.textBody}</p>
    </div>
  );
};

Note.defaultProps = {
  tags: [],
  title: "",
  textBody: "",
  _id: null
};

export default Note;
