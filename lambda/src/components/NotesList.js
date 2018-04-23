import React from "react";
import './NotesList.css';

export const NotesList = props => {
  return <div className="container"><h3>Your Notes:</h3>
        <div className="allNotes">{props.notesProp.map(n => 
            <div className="noteCard">
                <div className="noteName">{n.note_name}</div>
                <div className="noteContent">{n.note_content}</div>
            </div>)}
        </div>
        </div>;
};
