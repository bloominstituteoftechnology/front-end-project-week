import React from 'react';

const Note = props => {
    return (
        <div className="note-card">
            <h3>{props.note.title}</h3>
            <p>{props.note.content}</p>
        </div>
    )
}

export default Note;