import React from 'react';
import './notesList.css';


function NotesList(props) {
    if (!props.notesList || !props.notesList.length) {
        return <h1>No Notes here! Lets see if we can find them, if Notes don't load please refresh the page.</h1>
    }
    return (
        <div className='notesBoxesv1'>
            <h3>Your Notes:</h3>
            {props.notesList.map(note =>(
                <div className='notesBoxes' key={note._id} onClick={() => props.history.push(`/notes/${note._id}`)}>
                    <h1>{note.title}</h1>
                    <p>{note.textBody}</p>
                </div>
            ))}
        </div>
    );
}



export default NotesList;