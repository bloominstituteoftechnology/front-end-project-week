import React from 'react';
import { Link } from 'react-router-dom';
import './noteitem.css';

const NoteItem = props => {
    console.log("Note Item ID: " + props.id);
    return (
        <Link className="note-item-link" to={`/note/${props.id}`} >
            <div className="note-item">
                <h3>{props.title}</h3>
                <hr />
                <p>{props.text}</p>
            </div>
        </Link>

    );
}

export default NoteItem;