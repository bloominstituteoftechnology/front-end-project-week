import React from 'react';
import NoteCard from './noteCard';
import { Link } from 'react-router-dom';
import './Notes.css';
import SearchBar from '../search/search';

const NotesList = props => {
    return (
        <div className='notes-wrapper'>
            <SearchBar
                stateSearch={props.searchResult}
                searchResults={props.searchResults}
                signOutHandler={props.signOutHandler} />
            <h3 className='notes-header'>Your Notes:</h3>
            <div className='all-note-cards'>
                {props.notes.map(note => (
                    <Link to={`/notes/${note.id}`} id={note.id} key={note.id} className='note-links'>
                        <NoteCard key={note.id} note={note} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default NotesList;