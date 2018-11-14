import React from 'react';
// import {Link} from 'react-router-dom'; I'll be using this soon.

import NoteCard from './NoteCard';

const NoteList = props => {
    console.log(props.notes);
    return (
        <div className='note-list'>
            {props.notes.map(note => {
                return <NoteCard key={note.title + note.textBody} note={note} />
            })}
        </div>
    )
}

export default NoteList;