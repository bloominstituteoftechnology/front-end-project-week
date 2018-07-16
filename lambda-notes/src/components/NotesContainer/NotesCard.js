import React from 'react';

const NotesCard = props => {
    return (
        <div className='notes-card'>
            <h3 className='note-title'>{props.note.title}</h3>
            <p className='note-paragraph'>{props.note.textBody}</p>
        </div>
    );
}

export default NotesCard;