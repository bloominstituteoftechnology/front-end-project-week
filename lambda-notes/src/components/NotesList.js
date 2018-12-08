import React from 'react';
import Note from './Note';

const NotesList = props => {
    return(
        <div className='notes-container'>
            {props.notesData.map(note => {
                return <Note noteData={note} />
            })}
        </div>
    );
}

export default NotesList;