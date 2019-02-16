import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const NoteCard = ({note})=> {

  //Determine if note is too long to fit inside card, and add ellipsis if so
  let noteText = ''
  console.log(note);
  noteText = (note.content.length > 140) ? note.content.slice(0,140).concat('',' ...') : note.content
  
  return (
    <Link to={`note/${note.id}`} style={{textDecoration:"none"}} className="noteCard">
      <div className="noteContent">

          <h3>{note.title}</h3>
          <p>{noteText}</p>
      </div>
    </Link>
  )
}

export default NoteCard
