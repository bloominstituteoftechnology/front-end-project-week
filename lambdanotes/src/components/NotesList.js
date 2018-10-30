import React from 'react';

function NotesList(props) { 
    return (
        <div className="notesOverWrap">
                {props.notesList.map(note => (
                    <div className="noteCard" key={note.id}>
                        <h2 onClick={() => props.history.push(`/notes/${note.id}`)}>{note.notes_title}</h2>
                        <p>{note.notes_content}</p>
                    </div>
                ))}
        </div>
    ); 
}


 export default NotesList;
