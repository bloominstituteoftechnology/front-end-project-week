import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Note.css'

const Note = ({ note }) => (
  <div className="Note">

    {!note || !note.id
      ? "Loading..." :
      <div className="noteLoaded mainContent">
        <div className="noteActionLinks">
          <Link to={`/notes/${note.id}/edit`}>edit</Link>
          <Link to={`/notes/${note.id}/delete`}>delete</Link>
        </div>
        <div className="noteFullContent">
          <h3 className="noteFullTitle">
            {note.content.title}
          </h3>
          <div className="noteFullBody">
            {note.content.body}
          </div>
        </div>
      </div>
    }
  </div>
)

export default Note