import React from 'react';
import Note from './Note';

function NoteList(props) {
    return (
        <div className="noteslist-div">

            {props.notes.map((note, index) => (
                <Note key={index} note={note} />
            ))}
        </div>
    )
}

export default NoteList;