import React from 'react';
import './noteitem.css';

const NoteItem = props => {
    return (
        <div className="note-item">
            <h3>{props.title}</h3>
            <hr />
            <p>{props.text}</p>
        </div>
    );
}

export default NoteItem;