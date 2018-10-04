import React from 'react';

function NotesList(props) {
    if(!props.noteList || ! props.noteList.length) {
        return <h1>No Note Date Found...</h1>
    }
    return (
        <div>
            <h2>Your Notes</h2>
            <div className="noteWrap">
                {props.noteList.map(note => (
                    <div className="noteCard" key={note._id}>
                        <h2 onClick={() => props.history.push(`/notes/${note._id}`)}>{note.title}</h2>
                        <p>{note.textBody}</p>
                    </div>
                ))}
            </div>
        </div>
    ); 
 }

 export default NotesList;
