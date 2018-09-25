import React from 'react';

import Note from './Note';

export default function NotesList(props) {
    return (
        <div className="notes-container">
        {props.notes.map((note, index) => (
            <div 
            className="note-card"
            onClick={() => props.history.push(`/notes/${note._id}`)}>
            <h2>{note.title}</h2>
            <p>{note.textBody}</p>
            </div>
        ))}
        </div>
    )
}