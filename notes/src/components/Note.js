import React from 'react';

export default function Note(props) {
    return (
        <div className="note-card">
        <h2>{props.note.title}</h2>
        <p>{props.note.textBody}</p>
        </div>
    )
}