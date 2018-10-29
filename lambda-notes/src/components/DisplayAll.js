import React from 'react'
import { Container, Note, NoteTitle, NoteBody } from '../styles/DisplayAll'

const DisplayAll = ({ notes }) => (
  <Container>
    {notes.map(({ title, textBody, _id }) => (
      <Note key={_id}>
        <NoteTitle>{title}</NoteTitle>
        <NoteBody>{textBody}</NoteBody>
      </Note>
    ))}
  </Container>
)

export default DisplayAll
