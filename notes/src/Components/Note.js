import React from 'react';
import { Link } from 'react-router-dom';
const NoteCard = props => {
    return(
        
        <Link to={`/view/${props.id}`} className="note-card">
            <h3 className="card-title">{props.title}</h3>
            <p>{props.textBody}</p>
        </Link>
        
    );
}

export default NoteCard;