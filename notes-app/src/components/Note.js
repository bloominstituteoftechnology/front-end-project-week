import React from 'react';

function Note(props) {
    return (
        <div className="note-div">
            <h1>{props.note.title}</h1>
            <p>{props.note.textBody}</p>
        </div>
    )
}

export default Note;