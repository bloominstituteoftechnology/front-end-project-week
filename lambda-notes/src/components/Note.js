import React from 'react';
import { Link } from 'react-router-dom';

import './Note.css';

const Note = props => {
    return (
        <div className="note">
            <Link to={`/note/${props.note._id}`}>
                <h2 className="note-title">{props.note.title}</h2>
            </Link>
            <p className="note-textBody">{props.note.textBody}</p>
        </div>
    )
}

export default Note;