import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'components/Button'

const styles = {
  underline: '#333'
}

const NoteWrapper = Styled.div`
  background-color: white;
  color: rgb(68,68,68);
  border: 2px solid rgb(222,222,222);
  grid-area: note;
`

const NoteTitle = Styled.h3`
  margin: 5px;
  display: inline-block;
  color: #000;
  padding-bottom: 2px;
  border-bottom: 1px solid ${styles.underline};
`

const NoteContent = Styled.p`
  margin: 2px;
`

/** @type React.StatelessComponent<{title,content}> */
const Note = props => (
  <NoteWrapper>
    <NoteTitle>{props.title}</NoteTitle>
    <NoteContent>{props.content}</NoteContent>
  </NoteWrapper>
)

Note.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

/** @type React.StatelessComponent<{id,title,content}> */
export const LinkedNote = props => (
  <Link to={`/notes/${props.id}`}>
    <Note {...props} />
  </Link>
)

LinkedNote.propTypes = {
  id: PropTypes.number
}

const SNoteContainer = Styled.div`
  background-color: rgb(68,68,68);
  display: grid;
  grid-template-areas: '. . .'
  '. note .'
  '. . .';
`

const deleteNote = props => (
  <button
    onClick={e => {
      props.onDelete(props.id)
      e.preventDefault()
      props.history.push('/')
    }}
  >
    x
  </button>
)

deleteNote.propTypes = {
  onDelete: PropTypes.func,
  id: PropTypes.number,
  history: PropTypes.object
}

const DeleteButton = Button(deleteNote)

export const SingleNote = props => (
  <SNoteContainer>
    <Note {...props} />
    <DeleteButton {...props} />
  </SNoteContainer>
)

export { Note, NoteTitle, NoteContent }
