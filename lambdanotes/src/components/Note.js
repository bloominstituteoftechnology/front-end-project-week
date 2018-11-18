import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Note = ({note})=> {
  return (
    <Link to="/note" style={{textDecoration:"none"}} className="noteCard">
          <h3>{note.title}</h3>
          <hr/>
          <p>{note.textBody}</p>
    </Link>
  )
}

export default Note
