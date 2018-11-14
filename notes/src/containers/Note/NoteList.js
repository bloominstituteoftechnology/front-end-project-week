import React from 'react'
import Note from './Note';

const NoteList = ({notes}) => {

    return (
        <div>
            <h1>Your Notes:</h1>
        {notes.map(note => (
            <Note note={note} key={note.id} />
        ))}

        </div>)
}




export default NoteList