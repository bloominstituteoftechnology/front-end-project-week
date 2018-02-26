import React from 'react';

import './css/Note.css'

function Note (props) {
    const body = props.note.body.substr(0,160).concat('...')

    return (
        <div className="note">
            <h1>{props.note.title}</h1>
            <hr />
            <p>{body}</p>
        </div>
    )
}

export default Note;