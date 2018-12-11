import React from "react";

const Note = props => {
  return (
    <div className="noteCard">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
};

Note.defaultProps = {
  tags: [],
  title: "",
  content: "",
  id: null
};

export default Note;
