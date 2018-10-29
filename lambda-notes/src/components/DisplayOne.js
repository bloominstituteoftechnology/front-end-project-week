import React from 'react'
import { Container, Note, NoteTitle, NoteBody } from '../styles/DisplayAll'

const DisplayOne = ({ title, textBody, _id }) => (
  <Container>
    <Note key={_id}>
      <button>Edit</button>
      <button>Delete</button>
      <NoteTitle>{title}</NoteTitle>
      <NoteBody>{textBody}</NoteBody>
    </Note>
  </Container>
)

export default DisplayOne
