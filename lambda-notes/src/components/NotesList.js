import React from "react";
import Note from "./Note";

const NotesList = props => (
    <div className="notes-list">
        <h3 className="your-notes">Your Notes:</h3>
        <div className="notes">
            {props.notes.map((note, index) => (
                <Note note={note} key={index} /> 
            ))}
        </div>
    </div>
);

export default NotesList;