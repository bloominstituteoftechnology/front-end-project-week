import React from "react";
import Note from "./Note";

const ListView = props => {
  return (
    <div>
      {props.notes.map(note => (
        <Note key={note._id} note={note} />
      ))}
    </div>
  );
};

export default ListView;
