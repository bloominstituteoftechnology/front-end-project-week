import React from "react";

const SelectedNote = ({ note }) => {
  const { title, content } = note;
  return (
    <div>
      <h2>{title}</h2>
      <div>{content}</div>
    </div>
  );
};

export default SelectedNote;
