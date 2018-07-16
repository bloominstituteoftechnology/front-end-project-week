import React from 'react';
import { Link } from 'react-router-dom';

const NotesCard = props => {
    return (
        <Link className='notes-card-link' to={`/notes/${props.note._id}`}>
        
            <div className='notes-card'>
                <h3 className='note-title'>{props.note.title}</h3>
                <p className='note-paragraph'>{props.note.textBody}</p>
            </div>

        </Link>
    );
}

export default NotesCard;