import React from 'react';
import SmallNote from './SmallNote';

const NotesList = props => {
    return(
        <div className='notes-container'>
            {props.notesData.map(note => {
                return <SmallNote {...props} key={note.id} noteData={note} />
            })}
        </div>
    );
}

export default NotesList;