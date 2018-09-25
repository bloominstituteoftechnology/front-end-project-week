import React from 'react';
 

function NotesList(props) {
    if (!props.notesList || !props.notesList.length) {
        return <h1>No Notes here! Lets see if we can find them, one moment please...</h1>
    }
    return (
        <div>
            {props.notesList.map(note =>(
                <div key={note.id}>
                    {note.title}
                    <p>{note.textBody}</p>
                </div>
            ))}
        </div>
    );
}

export default NotesList;