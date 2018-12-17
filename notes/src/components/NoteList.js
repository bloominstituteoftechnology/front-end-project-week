import React from "react";
import Note from "./Note";

const NoteList = props => {
    return (
        <div className='note-list'>
            I am the note list
            <Note />
        </div>
    );
}

export default NoteList;