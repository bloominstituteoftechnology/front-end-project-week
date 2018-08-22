import React from 'react';

const Note = props => {
    return (
        <div className="note-card">
            <h4>{props.note.title}</h4>
            <p>{props.note.textBody}</p>
        </div>
    )
}

export default Note;