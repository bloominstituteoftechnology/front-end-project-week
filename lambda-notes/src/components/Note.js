import React from 'react';
import Tag from './Tag';
import '../styles/Note.css';

// returns to NotesList how to display each note
const Note = props => {
    return (
        <div className='note'>
            <p className='title'>{props.title}</p>
            <p className='body'>{props.body}</p>
            <div className='tag-text'>
                <p className='tagger'>Tags: </p>
                {props.tags.map(tag => {
                    return <Tag key={Math.random()} tag={tag} />
                })}
            </div>
        </div>
    )
}

export default Note;