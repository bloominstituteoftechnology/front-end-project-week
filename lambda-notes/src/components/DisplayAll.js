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

    // filtering happens here 

    const filteredNotes = notes.filter(({ title }) =>
      title.toLowerCase().match(searchParam)
    )

    // current approach to sorting notes is as follows:
    // we maintain a list of ids (sorted items)
    // in order to change the order we change the order 
    // of these ids
    // then in the render function we do the actual sorting
    // we create a new array and  find all items the belong
    // based on our sorted array, and push them in in order
    // then we push in the rest

    let sortedNotes = []

    sortedOrder.forEach(sortedId =>
      sortedNotes.push(filteredNotes.find(({ _id }) => _id === sortedId))
    )

    // when notes that have been added to the sorted array disappear
    // the find method above will return undefined, which will cause
    // our app to crash. so the current solution is simply to filter out
    // all the undefined notes.
    sortedNotes = sortedNotes.filter(item => item !== undefined)

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
          {sortedNotes.length > 0 &&
            sortedNotes.map(({ title, textBody, _id }) => (
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
