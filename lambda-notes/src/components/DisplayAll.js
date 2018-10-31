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
  CheckboxContainer,
  HiddenDefault,
  StyledCheckbox,
  SortToBeginning
} from '../styles/DisplayAll'

class DisplayAll extends Component {
  handleCheckChange = event => {
    event.persist()
    const { addChecked, removeChecked } = this.props

    if (event.target.checked) {
      addChecked(event.target.name)
    } else {
      removeChecked(event.target.name)
    }
  }

  render() {
    const {
      notes,
      checked,
      searchParam,
      selfAdded,
      sortedOrder,
      sortToBeginning
    } = this.props
    const { handleCheckChange } = this

    const filteredNotes = notes.filter(({ title }) =>
      title.toLowerCase().match(searchParam)
    )

    const sortedNotes = []

    sortedOrder.forEach(sortedId =>
      sortedNotes.push(filteredNotes.find(({ _id }) => _id === sortedId))
    )

    filteredNotes.forEach(note => {
      if (!sortedOrder.includes(note._id)) {
        sortedNotes.push(note)
      }
    })

    return (
      <Container>
        <PageHeader>
          {notes.length > filteredNotes.length
            ? `Your search for ${searchParam} matches ${
                filteredNotes.length
              } notes:`
            : `You currently have ${notes.length} notes:`}
        </PageHeader>
        <NotesContainer>
          {sortedNotes.map(({ title, textBody, _id }) => (
            <Note
              key={_id}
              style={{
                border: selfAdded
                  ? selfAdded.includes(_id)
                    ? '1px solid red'
                    : '1px solid black'
                  : '1px solid black'
              }}
            >
              <SortToBeginning onClick={() => sortToBeginning(_id)}>
                Sort to beginning
              </SortToBeginning>

              <HeaderWrapper>
                <Link to={`/note/${_id}`}>
                  <NoteTitle>
                    {title.length > 40
                      ? `${title.substring(0, 40)} ...`
                      : title}
                  </NoteTitle>
                </Link>

                <CheckboxContainer onChange={handleCheckChange}>
                  <HiddenDefault type="checkbox" name={_id} />
                  <StyledCheckbox isChecked={checked.includes(_id)} />
                </CheckboxContainer>
              </HeaderWrapper>
              <NoteBody>
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
