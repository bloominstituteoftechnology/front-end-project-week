import React from 'react';

export default function List(props) {
    if (!props.notesList || !props.notesList.length) {
        return <h1>No Notes data! Go fetch!!</h1>
    }
    return (
        <div className="notes-list-wrapper">
            {props.notesList.map(note => (
                <div className="note-card" key={note.id}>
                Note
                </div>
            ))}
        </div>
    );
}