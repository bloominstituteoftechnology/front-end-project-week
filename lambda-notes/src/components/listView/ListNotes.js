import React from 'react'
import Preview from './Preview'

export default function ListNotes(props) {
  return (
    <div>
      {props.notes.map( note => <Preview key={note._id} note={note} />)}
    </div>
  )
}
