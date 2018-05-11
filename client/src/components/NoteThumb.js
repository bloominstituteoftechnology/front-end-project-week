import React from 'react'
import { Link } from 'react-router-dom'
import './styles/NoteThumb.css'
import { compose } from 'ramda'

const head = a => a[0]
const tail = a => a.slice(1)

const clipText = limit => text =>
  text.length > limit
    ? text.substring(0, limit) + '...'
    : text

const titleCase = str =>
  str.split(' ')
    .map(word => head(word).toUpperCase() + tail(word))
    .join(' ')

const formatTitle = limit => compose(titleCase, clipText(limit))

const NoteThumb = ({ note: { id, content: { title, body } } }) => (
  <div className="NoteThumb">
    <Link to={`/notes/${id}`}>
      <h4 className="noteThumbTitle">{formatTitle(18)(title)}</h4>
      <hr />
      <div className="noteThumbBody">{clipText(80)(body)}</div>
    </Link>
  </div>
)

export default NoteThumb
