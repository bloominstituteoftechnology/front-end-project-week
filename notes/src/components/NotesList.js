import React from 'react';
import '../App.css';


function NotesList(props) {
    if (!props.notesList || !props.notesList.length) {
        return <h1 className='message'>Action completed. You're welcome.</h1>
    }
    console.log(props.notesList);
    return (
        <div className="notes-list-wrapper">
            {props.notesList.map(note => (
            <div className="notecard" key={note._id}>
                <h3
                onClick={() => props.history.push(`/notes/${note._id}`)}
                className='note-click'
                >
                {note.title}
                </h3>
                <p>({note.textBody})</p>
            </div>
            ))}
        </div>
    );
}



export default NotesList;
