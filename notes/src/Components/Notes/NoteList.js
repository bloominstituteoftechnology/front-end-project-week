import React from 'react';
// import {Link} from 'react-router-dom'; I'll be using this soon.

import NoteCard from './NoteCard';
import './notes.css';

const NoteList = props => {
    console.log(props.notes);
    return (
        <>
        <h2>Your Notes:</h2>
        <div className='note-list'>
            {props.notes.map(note => {
                return <NoteCard key={note.id} note={note} />
            })}
        </div>
        </>
    )
}

export default NoteList;