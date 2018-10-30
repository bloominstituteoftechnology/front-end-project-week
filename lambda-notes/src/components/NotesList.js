import React from 'react';
import Note from './Note';
import './NotesList.css';

const NotesList = props => {
    return (
        <div className='notesList'>
            {props.notes.map(note => <Note key={note._id} 
                                           id={note._id}
                                           title={note.title} 
                                           text={note.textBody}
                                           passThisNote={props.passThisNote}
                                           />)
            }
        </div>
    )
}

export default NotesList;