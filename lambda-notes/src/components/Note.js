import React from 'react';

import './Note.css'

function Note (props) {
    const body = props.note.body.substr(0,105).concat('...')

    return (
        <div className="note">
            <h1>{props.note.title}</h1>
            <hr />
            <p>{body}</p>
        </div>
    )
}

export default Note;