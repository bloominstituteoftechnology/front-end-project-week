import React from 'react';
import './Note.css';

const Note = props => {
    return (
        <div className="note">
            <header>
                <h3>{props.title}</h3>
            </header>
            <p>{props.content}</p>
        </div>
    )
}

export default Note;