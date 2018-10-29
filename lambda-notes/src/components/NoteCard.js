import React from 'react';
import { Link } from "react-router-dom";

const NoteCard = props => {
    return (
        <div>
            <Link to={`/note/get/${props.note._id}`}>
                <h2>{props.note.title}</h2>
                <p>{props.note.textBody}</p>
            </Link>
        </div>
    );
}

export default NoteCard;