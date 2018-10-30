import React from 'react'
import { Link } from 'react-router-dom'
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
          <Link to={`/note/${_id}`}>
            <NoteTitle>
              {title.length > 40 ? `${title.substring(0, 40)} ...` : title}
              }
            </NoteTitle>
          </Link>
          <NoteBody onClick={() => deleteNote()}>
            {textBody.length > 200
              ? `${textBody.substring(0, 200)} ...`
              : textBody}
          </NoteBody>
        </Note>
      ))}
    </NotesContainer>
  </Container>
)

export default DisplayAll
