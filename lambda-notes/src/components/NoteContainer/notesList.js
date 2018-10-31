import React from 'react';
import NoteCard from './noteCard';
import { Link } from 'react-router-dom';
import './Notes.css';


const NotesList = props => {
    return (
        <div className='notes-wrapper'>
            <h3 className='notes-header'>Your Notes:</h3>
            <div className='all-note-cards'>
                {props.notes.map(note => (
                    <Link to={`/notes/${note._id}`} id={note._id} key={note._id} className='note-links'>
                        <NoteCard key={note._id} note={note} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default NotesList;