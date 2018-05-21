import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteNote } from '../actions'

const Component = (props) => {
  const {
    deleteNote,
    match: {
      params: { id }
    },
    location: { fbId, text, title }
  } = props
  console.log(props)
  return (
  <Fragment>
    <h2>{title}</h2>
    <div className="Note__deets">
      <p>{text}</p>
      <Link to={{ pathname: `/edit/${id}`, fbId, title, text }}>edit</Link>{' '}
      <Link to="/" onClick={() => deleteNote(fbId)}>
        delete
      </Link>
    </div>
  </Fragment>
)}

export const Note = connect(null, { deleteNote })(Component)