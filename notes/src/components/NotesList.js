import React from 'react';

import Note from './Note';

export default function NotesList(props) {
    return (
        <div className="notes-container">
        {props.notes.map((note, index) => (
            <Note note={note} key={note._id} index={index}/>
        ))}
        </div>
    )
}