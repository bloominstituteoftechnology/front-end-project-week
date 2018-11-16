import React from 'react'
import { Link } from 'react-router-dom'

export default function Note(props) {
  return (
    <div>
      <h1><Link to={`/note/${props.note._id}`}>{props.note.title}</Link></h1>
      <p>{props.note.textBody.slice(0, 30)}...</p>
    </div>
  )
}
