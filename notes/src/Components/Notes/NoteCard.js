import React from 'react';

import './notes.css';

const NoteCard = props => {
    let textBody = props.note.textBody;

    if (textBody.length > 215) {
        textBody = textBody.slice(0, 215);
        textBody = textBody + '...';
    }
    console.log(props.key);
    return (
        <div className='note-card'>
            <div className='note-card-title'>
                {props.note.title}
            </div>
            <div className='note-card-break'/>
            <div className='note-card-body'>
                {textBody}
            </div>
        </div>
    )
}

export default NoteCard;