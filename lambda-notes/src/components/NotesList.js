import React from 'react';
import Note from './Note';
import './NotesList.css';

const NotesList = props => {
    console.log('noteslist props',props);
    return (
        <div className='notesList'>
            <h2>Your Notes:</h2>
            <div className='notesDisplay'>
                {props.notes.map(note => <Note key={note._id} 
                                            id={note._id}
                                            title={note.title} 
                                            text={note.textBody}
                                            passThisNote={props.passThisNote}
                                            />)
                }
            </div>
        </div>
    )
}

export default NotesList;