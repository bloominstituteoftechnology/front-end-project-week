import React from 'react'
import {
  Container,
  NotesContainer,
  PageHeader,
  Note,
  NoteTitle,
  NoteBody
} from '../styles/DisplayAll'

// notebody click handler is to make it easy to clean up notes
// if they get too busy

const DisplayAll = ({ notes, changeDisplayedPage, deleteNote }) => (
  <Container>
    <PageHeader>Your Notes:</PageHeader>
    <NotesContainer>
      {notes.map(({ title, textBody, _id }) => (
        <Note key={_id}>
          <NoteTitle onClick={() => changeDisplayedPage(_id)}>
            {title}
          </NoteTitle>
          <NoteBody onClick={() => {}}>{textBody}</NoteBody>
        </Note>
      ))}
    </NotesContainer>
  </Container>
)

export default DisplayAll
