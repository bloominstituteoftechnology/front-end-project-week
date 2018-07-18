import React from 'react'
import { Link } from 'react-router-dom'

export default ({ title, text, id, deleteNote, history }) =>
  <div>
    <h2>{title}</h2>
    <hr />
    <p>{text}</p>
    <br /><br />
    <span onClick={() => {
      deleteNote(id)
      history.push('/')
    }}>
      [delete]
    </span>
    <Link to={`/note/${id}/edit`}>
      [edit]
    </Link>
  </div>


