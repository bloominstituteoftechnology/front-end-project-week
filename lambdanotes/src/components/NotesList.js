import React from 'react';

function NotesList(props) {
    if(!props.noteList || ! props.noteList.length) {
        return <h1>No Note Date Found...</h1>
    }
    return (
        <div className="noteWrap">
            {props.noteList.map(note => (
                <div className="noteCard" key={note.id}>
                    <h2 onClick={() => props.history.push(`/notes/${note.id}`)}>{note.title}</h2>
                    <p>{note.textBody}</p>
                </div>
            ))}
        </div>
    ); 
 }

 export default NotesList;
