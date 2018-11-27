import React from 'react'
import Note from './Note'

const NoteContainer = props => {
  return (
    <div>
       {props.notes.map((note, index) => <Note
        textBody={note.textBody}
        title={note.title}
         />)}
    </div>
  )
}


export default NoteContainer