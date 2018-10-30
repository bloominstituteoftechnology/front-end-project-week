import React from 'react';
import './Note.css';

const Note = props => {
    return (
        <div className="note">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Note;