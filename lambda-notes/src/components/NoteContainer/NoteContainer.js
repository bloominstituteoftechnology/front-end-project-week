import React from 'react'
import Note from './Note'
import './NoteContainer.css'
const NoteContainer = props => {
  return (
    <div className="note_container">
       {props.notes.map((note, index) => <Note
        textBody={note.textBody}
        title={note.title}
         />)}
    </div>
  )
}


export default NoteContainer