import React from 'react';
import { Link } from 'react-router-dom';

import './Note.css';

const Note = props => {
    return (
        <div>
            <Link to={`/note/${props.note._id}`}>
                <h2>{props.note.title}</h2>
            </Link>
            <p>{props.note.textBody}</p>
        </div>
    )
}

export default Note;