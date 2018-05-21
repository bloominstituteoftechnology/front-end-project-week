import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getNotes } from '../actions'

const Notes = ({ notes, isLoading }) => isLoading
  ? <div className='loader' />
  : <Fragment>
      <h2>Your Notes:</h2>
      <div className='Content'>
        <NoteContainer notes={notes} />
      </div>
    </Fragment>

const NoteContainer = ({ notes }) =>
  notes.map(({ id, title, text }) => (
    <Link to={{ pathname: `/note/${id}`, title, text }} key={id}>
      <div className='Note__container'>
        <h2>{title}</h2>
        <p>{text.length > 264 ? `${text.slice(0, 260)}…` : text}</p>
      </div>
    </Link>
  ))

export const Content = connect(
  ({ notes: { notes, isLoading } }) => ({ notes, isLoading }),
  { getNotes }
)(Notes)
