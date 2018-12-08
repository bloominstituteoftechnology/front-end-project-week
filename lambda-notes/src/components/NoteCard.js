import React from 'react';
import '../styles/NoteCard.css';

const noteCard = props => {
    return (
        <div className='noteCard-container'>
            <div className='noteCard-content'>
                <div className='noteCard-title'>{props.noteInfo.title}</div>
                <div className='noteCard-textBody'>{props.noteInfo.textBody}</div>
            </div>
        </div>
    );
}

export default noteCard;