import React from 'react';
import Note from './Note';

const NotesList = props => {
    return (
        <div className='notesList'>
            {props.notes.map(note => <Note key={note._id} 
                                           id={note._id}
                                           title={note.title} 
                                           text={note.textBody}
                                           />)
            }
        </div>
    )
}

export default NotesList;