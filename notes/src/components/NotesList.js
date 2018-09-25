import React from 'react';

import Note from './Note';

export default function NotesList(props) {
    return (
        <div className="notes-container">
        {props.notes.map((note, index) => (
            <div className="note-card">
            <h2>{props.note.title}</h2>
            <p>{props.note.textBody}</p>
            </div>
        ))}
        </div>
    )
}