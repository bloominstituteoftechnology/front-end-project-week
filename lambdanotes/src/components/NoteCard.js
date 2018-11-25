import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const NoteCard = ({note})=> {
  return (
    <Link to={`note/${note._id}`} style={{textDecoration:"none"}} className="noteCard">
      <div className="noteContent">

          <h3>{note.title}</h3>
          <p>{note.textBody}</p>
      </div>
    </Link>
  )
}

export default NoteCard
