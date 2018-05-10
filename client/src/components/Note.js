import React from 'react'
import { Link } from 'react-router-dom'

const Note = ({ note }) => (
  <div className="Note">

    {!note || !note.id
      ? "Loading..." :
      <div className="noteLoaded">
        <span className="noteActionLinks">
          <Link to={`/notes/${note.id}/edit`}>edit</Link>
          <Link to={`/notes/${note.id}/delete`}>delete</Link>
        </span>
        <div className="noteFullContent">
          <div className="noteFullTitle">
            {note.content.title}
          </div>
          <div className="noteFullBody">
            {note.content.body}
          </div>
        </div>
      </div>
    }
  </div>
)

export default Note