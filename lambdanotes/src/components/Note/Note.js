import React from "react";

const Note = props => {
  const { title, content } = props.note;
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Note;
