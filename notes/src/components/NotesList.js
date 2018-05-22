import React from "react";
import Note from "./Note.js";
import { Link } from "react-router-dom";

const NotesList = props => {
    return (
        <div className="notes-list">
            {props.notes.map(note => {
                return (
                    <div key={note.id}>
                        <Link to={`/note/${note.id}`}><Note note={note}/></Link>
                    </div>
                );
            })}
        </div>    
    );
}

export default NotesList;