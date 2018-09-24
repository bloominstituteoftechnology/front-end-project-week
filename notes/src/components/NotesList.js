import React from 'react';

import Note from './Note';

export default function NotesList(props) {
    return (
        <div className="notes-container">
        {props.notes.map(note => (
            <Note note={note} key={note._id}/>
        ))}
        </div>
    )
}