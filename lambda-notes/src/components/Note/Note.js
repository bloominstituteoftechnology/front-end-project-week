import React from 'react';

import './Note.css';


const Note = props => {
    return (
        <div className="note">
            <h4>{props.note.title}</h4>
            <p>{props.note.body}</p>
        </div>
    )
}

export default Note;