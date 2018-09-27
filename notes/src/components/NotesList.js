import React from 'react';

import Note from './Note';

export default function NotesList(props) {
    if (!props.notes || !props.notes.length) {
        return <h1> No data, needs to be fetched... </h1>;
    }
    return (
        <div className="notes-container">
        {props.notes.map((note) => (
            <div 
            className="note-card"
            key={note._id}
            onClick={() => props.history.push(`/notes/${note._id}`)}>
            <h2>{note.title}</h2>
            <p>{note.textBody}</p>
            </div>
        ))}
        </div>
    );
}