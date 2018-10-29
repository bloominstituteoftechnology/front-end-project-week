import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = props => {
    return(
        
        <Link to={`/edit/${props.id}`} className="note-card">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.textBody}</p>
        </Link>
        
    );
}

export default NoteCard;
