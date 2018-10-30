import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = props => {
    //console.log(props.note.textBody);
    return (
        <Link to={`/notes/${props.note._id}`} className="note-card-link">
            <div className="note-card">
                <h3>{props.note.title}</h3>
                <hr />
                <p>{props.note.textBody}</p>
            </div>
        </Link>
    )
}

export default NoteCard;