import React from 'react';

function Note (props) {
    return (
        <div>
            <h1>{props.note.title}</h1>
            <p>{props.note.body}</p>
        </div>
    )
}

export default Note;