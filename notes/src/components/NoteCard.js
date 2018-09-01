import React from 'react';
import CreateView from './CreateView';

const NoteCard = props => {
    return (
        <div>
            <span>{props.title}</span>
            <p>{props.content}</p>
        </div>
    )
}

export default NoteCard;