import React from "react";
import Note from "./Note";
import "bulma/css/bulma.css";
import "../styles/custom-props.css";
const NotesList = props => {
  
  return (
    <div className="columns is-multiline">
      {props.notesData.map(note => {
        return (
          <div className="column is-one-third" key={note._id}>
            <Note title={note.title} id = {note._id} textBody={note.textBody} history = {props.history}/>
          </div>
        );
      })}
    </div>
  );
};

export default NotesList;
