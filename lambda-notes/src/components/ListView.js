import React from "react";
import "../App.css";
import NoteCard from "./NoteCard";

const ListView = props => {
  if (!props.notes.length) {
    return <h2>Loading</h2>;
  }
  return (
    <div className="list-view">
      <h1>Your Notes:</h1>
      <div className="note-card-container">
        {props.notes.map(note => {
          return <NoteCard note={note} key={note._id} />;
        })}
      </div>
    </div>
  );
};

export default ListView;
