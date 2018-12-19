import React from "react";
import Note from "./Note";

const NoteList = ({ notes }) => (
    <div className='note-list'>    
    {notes.map(note => (
        <Note note={note} key={note._id} />
    ))}
    </div>
);

export default NoteList;