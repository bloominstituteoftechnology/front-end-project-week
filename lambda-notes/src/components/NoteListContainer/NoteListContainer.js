import React from 'react'
import { Button } from 'reactstrap'
import './NoteListContainer.css'
import styled from 'styled-components'

const H1 = styled.h1 `
font-size: 1.6rem ;
font-family: 'Archivo Black'
`
export class NoteListContainer extends React.Component {
  render() {
    return (
      <div className="note_list_container">
      <H1>Lambda Notes</H1>
      <Button color="success">View Your Notes.</Button>
      <Button color="success">Add Note +</Button>
      </div>
    )
  }
}

export default NoteListContainer
