import React from 'react';

import './Note.css';


const Note = props => {
    return (
        <div className="note">
            <div className="note-title">{props.note.title}</div>
            <p className="note-body">{props.note.body}</p>
        </div>
    )
}

export default Note;