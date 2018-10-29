import React, { Component } from 'react'
import { Container, Note, NoteTitle, NoteBody } from '../styles/DisplayAll'
import Edit from './Edit'

class DisplayOne extends Component {
  state = { editing: false }

  edit = () => {
    this.setState({ editing: true })
  }

  render() {
    const { deleteNote, changeDisplayedPage, title, textBody, _id } = this.props
    const { edit } = this
    const { editing } = this.state

    return (
      <Container>
        {editing ? (
          <Edit {...this.props} />
        ) : (
          <Note key={_id}>
            <button onClick={() => edit()}>Edit</button>
            <button
              onClick={() => {
                deleteNote(_id)
                changeDisplayedPage('all')
              }}
            >
              Delete
            </button>
            <NoteTitle>{title}</NoteTitle>
            <NoteBody>{textBody}</NoteBody>
          </Note>
        )}
      </Container>
    )
  }
}

export default DisplayOne
