import React from "react";
import Note from "./Note"
import './index.css';

const NoteList = (props) => {
    return(
        <div className="notes-list">
        {
          props.notes.map((note,index) => (
              <Note key={index} name={index} title={note.title} message={note.message} /> 
            )
          )
        }
      </div>
    );
}

export default NoteList;