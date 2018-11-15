import React from 'react'

import Note from './Note'

const NoteList = props => {
  const Notes = props.notes.map(note => {
    return <Note key={note.id} />
  })

  return <React.Fragment>{Notes}</React.Fragment>
}

export default NoteList
