import React from "react";
import Note from "./Note";

const ListView = props => {
  return (
    <div>
      <h2 className="header">Your Notes:</h2>
      <div className="list-view">
        {props.notes.map(note => (
          <Note key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default ListView;
