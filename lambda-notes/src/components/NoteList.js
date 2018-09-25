import React from 'react';

const NoteList = props => {
    console.log('notelist props:', props)
    return (
        <div>
            <h1>Your Notes:</h1>
            {props.notes.map(note => 
                <div key={note.id}>
                    <h2>{note.title}</h2>
                    <p>{note.content}...</p>
                </div>
            )}
        </div>
    )
}


export default NoteList;