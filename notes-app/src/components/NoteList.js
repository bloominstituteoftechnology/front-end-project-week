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
              <p>
                {note.textBody.length > 40
                  ? note.textBody.substring(0, 40) + "..."
                  : note.textBody}
              </p>
            </div>
          </Link>
        )
      })
    ) : (
      <h2>Add Some Notes</h2>
    )

  return (
    <div className="notes-wrapper">
      <h2>Your Notes:</h2>
      <div className="note-list">{Notes}</div>
    </div>
  )
}

export default NoteList
