import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = (props) => {
    return (
        <Link to={`/note/${props.note._id}`}>
            <h2>{props.note.title}</h2>
            <p>{props.note.textBody}</p>
        </Link>
    )
}

export default NoteCard;