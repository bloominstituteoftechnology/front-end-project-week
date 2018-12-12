import React from 'react';
import Note from './Note';
import './NotesList.css';

const NotesList = props => {
    return (
        <div className='notesList'>
            <h2 className='yourNotes'>Your Notes:</h2>
            <div className='notesDisplay'>
                {props.notes.map(note => <Note key={note.id} 
                                            id={note.id}
                                            title={note.title} 
                                            text={note.text}
                                            passThisNote={props.passThisNote}
                                            />)
                }
            </div>
        </div>
    )
}

export default NotesList;