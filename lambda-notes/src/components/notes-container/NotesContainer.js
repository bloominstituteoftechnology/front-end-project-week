import React from 'react';
import SingleNote from './SingleNote.js';

const Notes_container= props => {
    console.log(props)
    return (
    <div>
    {props.notes.map(note => (
    <SingleNote 
    key={note._id} 
    title={note.title} 
    body={note.textBody} 
    editedNoteTitleHandler={props.editedNoteTitleHandler}
    editedNoteBodyHandler={props.editedNoteBodyHandler}/>
    ))}
    </div>
    )
}
export default Notes_container;