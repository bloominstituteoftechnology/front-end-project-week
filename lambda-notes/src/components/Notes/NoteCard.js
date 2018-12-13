import React from 'react';
import { Link } from 'react-router-dom';

// card for when all notes are displayed on first page
const NoteCard = props => {
    //console.log(props.note.textBody);
    return (
        <Link to={`/notes/${props.note._id}`} className="note-card-link">
            <div className="note-card">
                <h3 className="note-card-title">{props.note.title}</h3>
                <hr />
                <p>{props.note.textBody}</p>
            </div>
        </Link>
    )
}

export default NoteCard;