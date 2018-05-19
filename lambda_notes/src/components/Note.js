import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const Note = ({ db, del, history, id, text, title }) => {
  const handleDelete = e => {
    e.preventDefault()
    del(db)
    history.push('/')
  }

  return (
    <Fragment>
      <h2>{title}</h2>
      <div className="Note__deets">
        <p>{text}</p>
        <Link to={`/edit/${id}`}>edit</Link>{' '}
        <Link to="/" onClick={handleDelete}>
          delete
        </Link>
      </div>
    </Fragment>
  )
}
