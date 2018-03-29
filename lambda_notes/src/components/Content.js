import React from 'react'
import { Link } from 'react-router-dom'

export const Content = ({ notes }) => (
  <div className="Content__container">
    <h2>Your Notes:</h2>
    <div className="Content">
      <NoteContainer notes={notes} />
    </div>
  </div>
)

const NoteContainer = ({ notes }) =>
  notes.map(({ id, title, text }) => (
    <Link to={`/note/${id}`}>
      <div className="Note__container" key={id}>
        <h2>{title}</h2>
        <p>{text.length > 264 ? `${text.slice(0, 260)}…` : text}</p>
      </div>
    </Link>
  ))
