import React from 'react';

const NoteCard = props => {
    return (
        <div className='note-card'>
            <div className='note-card-title'>
                {props.note.title}
            </div>
            <div className='note-card-body'>
                {props.note.textBody}
            </div>
        </div>
    )
}

export default NoteCard;