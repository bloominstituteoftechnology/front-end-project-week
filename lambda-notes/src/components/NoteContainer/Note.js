import React from 'react'
import './NoteContainer.css'
const Note = props => {
  return (
    <div>
     <section className="note_container">
      <div className="note_styling">
       <div className="note_title">{props.title}</div>
        <article className="note_body">{props.textBody}</article>
      </div>
     </section>
    </div>
  )
}

export default Note
