import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const NoteCard = ({note})=> {

  //Determine if note is too long to fit inside card, and add ellipsis if so
  let noteText = ''
  noteText = (note.textBody.length > 140) ? note.textBody.slice(0,140).concat('',' ...') : note.textBody
  
  return (
    <Link to={`note/${note._id}`} style={{textDecoration:"none"}} className="noteCard">
      <div className="noteContent">

          <h3>{note.title}</h3>
          {console.log('before display',noteText)}
          <p>{noteText}</p>
      </div>
    </Link>
  )
}

export default NoteCard
