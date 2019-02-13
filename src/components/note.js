import React from 'react'
import "../css/note.css"

const Note = props => {
  return <div className="note-card">

    <div className="note" onClick={() => props.noteView(props.id)}>
      <div className="title">{props.title}</div>
      <div className="textBody">{props.textBody}</div>
    </div>
  </div>

};
export default Note;