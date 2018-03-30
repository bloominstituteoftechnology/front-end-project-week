import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const Note = ({ del, id, text, title }) => (
  <Fragment>
    <h2>{title}</h2>
    <div className="Note__deets">
      <p>{text}</p>
      <Link to={`/edit/${id}`}>edit</Link>{' '}
      <Link to="/" onClick={() => del(id)}>delete</Link>
    </div>
  </Fragment>
)