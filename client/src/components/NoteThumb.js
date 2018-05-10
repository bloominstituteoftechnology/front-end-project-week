import React from 'react'
import { Link } from 'react-router-dom'

const NoteThumb = ({ note: { id, content: { title, body } } }) => (
  <div className="NoteThumb">
    <Link to={`/notes/${id}`}>
      <div>{title}</div>
      <div>{body}</div>
    </Link>
  </div>
)

export default NoteThumb
