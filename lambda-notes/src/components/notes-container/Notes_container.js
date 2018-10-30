import React from 'react';
import Single_note from './Single_note.js';

const Notes_container= props => {
    console.log(props)
    return (
    <div>
    {props.notes.map(note => (
    <Single_note 
    key={note.id} 
    title={note.title} 
    body={note.textBody} 
    editedNoteTitleHandler={this.editedNoteTitleHandler}
    editedNoteBodyHandler={this.editedNoteBodyHandler}/>
    ))}
    </div>
    )
}
export default Notes_container;