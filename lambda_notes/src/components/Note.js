import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteNote } from '../actions'

const Component = ({
  deleteNote,
  match: { params: { id } },
  location: { text, title }
}) => <Fragment>
  <h2>{title}</h2>
  <div className='Note__deets'>
    <p>{text}</p>
    <Link to={{ pathname: `/edit/${id}`, title, text }}>edit</Link>{' '}
    <Link to='/' onClick={() => deleteNote(id)}>delete</Link>
  </div>
</Fragment>

export const Note = connect(null, { deleteNote })(Component)