import React from 'react'
import NotePreview from './NotePreview';

export default (props) => {
  let notes = props.notes.map(note => <NotePreview key={note["_id"]} note={note} />)
  return (
    <div className="noteGrid">
      <h1>Lambda Notes</h1>
      <div>
        {notes}
      </div>
    </div>
  )
}
