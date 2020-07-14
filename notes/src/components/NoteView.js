import React from "react";
import NoteCard from "./NoteCard";

const NoteView = props => {
  return (
    <div>
      <button>edit</button>
      <button>delete</button>
      <h5>{props.title}</h5>
      <p>{props.content}</p>
    </div>
  );
};

export default NoteView;
