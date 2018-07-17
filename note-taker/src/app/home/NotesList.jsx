import React from "react";
import Note from "./Note";
import "bulma/css/bulma.css";
import "../styles/custom-props.css";
const NotesList = props => {
  
  console.log(props.notesData);
  return (
    <div className="columns is-multiline">
      {props.notesData.map(note => {
        return (
          <div className="column is-one-third" key={note._id}>
            <Note title={note.title} textBody={note.textBody} />
          </div>
        );
      })}
    </div>
  );
};

export default NotesList;
