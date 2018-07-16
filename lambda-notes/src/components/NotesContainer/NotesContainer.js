import React from 'react';
import NotesCard from './NotesCard';

const NotesContainer = props => {
    return (
        <div className='notes-container' >
            <h3 className='notes-header' >Your Notes:</h3>
            <div className='notes-cards'>
                {props.notes.map(note => <NotesCard key={note._id} note={note} />)}
            </div>
        </div>
    );
}

export default NotesContainer;