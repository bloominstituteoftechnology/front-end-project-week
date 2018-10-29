import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = props => {
    return (
        <div>
             <Link to={`/notes/${props.notes._id}`}>
                <h3 className = 'noteCardTitle'> {props.title} </h3>
                <p>{props.textBody}</p>
            </Link>

            
        </div>
    )
}

export default NoteCard;