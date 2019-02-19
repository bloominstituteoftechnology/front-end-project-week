import React from 'react';

import './notes.css';

const NoteCard = props => {
    let content = props.note.content;
    if (content.length > 215) {
        content = content.slice(0, 215);
        content = content + '...';
    }
    return (
        <div className='note-card'>
            <div className='note-card-title'>
                {props.note.title}
            </div>
            <div className='note-card-break'/>
            <div className='note-card-body'>
                {content}
            </div>
            <div className='note-card-break'/>
            <div className='note-card-tags'>
                <h5>Tags</h5>
                {props.note.tags.map(tag => {
                    return <div key={tag}>{tag}</div>;
                })}
            </div>
        </div>
    )
}

export default NoteCard;