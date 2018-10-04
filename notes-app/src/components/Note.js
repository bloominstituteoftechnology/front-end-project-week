import React from 'react';
import { Link } from 'react-router-dom';

function Note(props) {
    return (
        <div className="note-div">
            <Link to={`/notes/${props.note._id}`} style={{textDecoration: 'none'}}>
            <h1>{props.note.title}</h1>
            </Link>
            <p>{props.note.textBody}</p>
        </div>
    )
}

export default Note;