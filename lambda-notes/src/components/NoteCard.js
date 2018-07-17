import React from 'react'
import { Link } from 'react-router-dom'

const NoteCard = (props) => {
  const note = props.note
  return (
    <Link key={note._id} to={`/notes/${note._id}`}>
      <div className='noteCard'>
        <h1 className='cardTitle'>{note.title}</h1>
        <p>{note.textBody}</p>
      </div>
    </Link>
  )
}
export default NoteCard
