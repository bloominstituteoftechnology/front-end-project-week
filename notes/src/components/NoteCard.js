import React from "react";
// import CreateView from "./CreateView";

const NoteCard = props => {
  const { title, content } = props.notes;

  return (
    <div>
      <span>{title}</span>
      <p>{content}</p>
    </div>
  );
};

export default NoteCard;
