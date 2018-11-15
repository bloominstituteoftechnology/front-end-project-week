import React from 'react'
import Note from '../noteView/Note'

export default function ListNotes(props) {
  return (
    <div>
      {props.notes.map( note => <Note key={note._id} note={note} />)}
    </div>
  )
}
