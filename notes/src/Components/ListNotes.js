import React from 'react';
import Note from './Note'
 const NoteList = (props) => {
    return(
        <div className="note-list">
        <h2>Your Notes:</h2>
            {props.notes.map(note => {
                return (<Note id={note._id} key={note._id} title={note.title} textBody={note.textBody} />)
            })}
        </div>
    );
}
 export default NoteList;