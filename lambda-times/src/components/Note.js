import React from 'react';

const Note = props => {
    return (
        <div className="note-card">
        <h1>{props.title}</h1>
        <p>{props.textBody}</p>
        </div>
    )
}

export default Note;