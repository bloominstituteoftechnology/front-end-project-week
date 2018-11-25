import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const NoteCard = ({note})=> {

  //Determine if note is too long to fit inside card, and add ellipsis if so
  let noteText = ''
  noteText = (note.textBody.length > 400) ? note.textBody.slice(0,145).concat('',' ...') : note.textBody

  return (
    <Link to={`note/${note._id}`} style={{textDecoration:"none"}} className="noteCard">
      <div className="noteContent">

          <h3>{note.title}</h3>
          <p>{noteText}</p>
      </div>
    </Link>
  )
}

export default NoteCard
