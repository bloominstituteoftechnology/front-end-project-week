import React from 'react';

import './notes.css';

const NoteCard = props => {
    if (props.note.textBody.length > 215) {
        props.note.textBody = props.note.textBody.slice(0, 215);
        props.note.textBody = props.note.textBody + '...';
    }
    return (
        <div className='note-card'>
            <div className='note-card-title'>
                {props.note.title}
            </div>
            <div className='note-card-break'/>
            <div className='note-card-body'>
                {props.note.textBody}
            </div>
        </div>
    )
}

export default NoteCard;