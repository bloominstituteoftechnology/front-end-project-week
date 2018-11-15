import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = (props) => {
    return (
        <Link className="note-card" to={`/note/${props.note._id}`}>
            <h3>{props.note.title}</h3>
            <p>{props.note.textBody}</p>
        </Link>
    )
}

export default NoteCard;