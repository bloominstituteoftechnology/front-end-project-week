import React from 'react';
import Note from './Note';

const Notes = props => {
    return ( <div className = 'notes-wrapper'>
            {props.note.map(note => <Note key={note.title} note={note} /> )}

        </div>
        )
}

export default Notes;