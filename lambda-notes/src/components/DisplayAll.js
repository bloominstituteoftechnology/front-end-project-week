import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  NotesContainer,
  PageHeader,
  Note,
  NoteTitle,
  NoteBody,
  HeaderWrapper,
  Checkbox
} from '../styles/DisplayAll'

// notebody click handler is to make it easy to clean up notes
// if they get too busy

class DisplayAll extends Component {
  handleCheckChange = event => {
    event.persist()
    const { addChecked, removeChecked } = this.props

    if (event.target.checked) {
      // console.log(`${event.target.name} is checked`)
      addChecked(event.target.name)
    } else {
      // console.log(`${event.target.name} is unchecked`)
      removeChecked(event.target.name)
    }
  }

  render() {
    const { notes, deleteNote } = this.props
    const { handleCheckChange } = this

    return (
      <Container>
        <PageHeader>Your Notes:</PageHeader>
        <NotesContainer>
          {notes.map(({ title, textBody, _id }) => (
            <Note key={_id}>
              <HeaderWrapper>
                <Link to={`/note/${_id}`}>
                  <NoteTitle>
                    {title.length > 40
                      ? `${title.substring(0, 40)} ...`
                      : title}
                  </NoteTitle>
                </Link>
                <Checkbox
                  type="checkbox"
                  onChange={handleCheckChange}
                  name={_id}
                />
              </HeaderWrapper>
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
  }
}

export default DisplayAll
