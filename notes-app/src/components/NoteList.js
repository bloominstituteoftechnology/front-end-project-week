import React from 'react'
import { Link } from 'react-router-dom'

import Note from './Note'

const NoteList = props => {
  const Notes =
    props.notes.length > 0 ? (
      props.notes.map(note => {
        return (
          <Link to={`notes/${note._id}`} key={note._id}>
            <div className="notes-container">
              <h2>{note.title}</h2>
              <hr />
              <p>{note.textBody}</p>
            </div>
          </Link>
        )
      })
    ) : (
      <h2>Add Some Notes</h2>
    )

  return (
    <React.Fragment>
      <h2>Your Notes:</h2>
      <div className="note-list">{Notes}</div>
    </React.Fragment>
  )
}

export default NoteList
