import React from 'react';
import {Link} from 'react-router-dom'; 

import NoteCard from './NoteCard';
import './notes.css';

const NoteList = props => {
    return (
        <>
        <h2>Your Notes:</h2>
        <div className='note-list'>
            {props.notes.map(note => {
                return (
                    <Link to={`/note/${note._id}`} className='card-link' key={note._id + note.title}> 
                        <NoteCard key={note._id} note={note} />
                    </Link>
                )
            })}
        </div>
        </>
    )
}

export default NoteList;