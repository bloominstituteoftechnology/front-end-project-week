import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const NoteCard = ({note})=> {
  return (
    <Link to={`note/${note._id}`} style={{textDecoration:"none"}} className="noteCard">
          <h3>{note.title}</h3>
          <hr/>
          <p>{note.textBody}</p>
    </Link>
  )
}

export default NoteCard
