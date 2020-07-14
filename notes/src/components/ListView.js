import React from "react";
import NoteCard from "./NoteCard";

import "./ListView.css";

const ListView = props => {
  return (
    <div className="note-container">
      <h5 className="list-header">Your Notes: </h5>
      <ul>
        {props.notes.map((note, i) => {
          return <NoteCard key={i} notes={note} />;
        })}
      </ul>
    </div>
  );
};

export default ListView;
