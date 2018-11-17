import React from 'react'
import './style.css'

const Note = ({note})=> {
  return (
    <div className="noteCard">
        <h3>{note.title}</h3>
        <hr/>
        <p>{note.textBody}</p>
    </div>
  )
}

export default Note
