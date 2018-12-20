import React from "react";
import Note from "./Note";
import NotesHeader from "./NotesHeader";

const NoteList = ({ notes }) => {
    return (
        <div>
            <NotesHeader />
            <div className='note-list'>    
            {notes.map(note => (
                <Note note={note} key={note._id} />
            ))}
            </div>
        </div>
    );
}
export default NoteList;