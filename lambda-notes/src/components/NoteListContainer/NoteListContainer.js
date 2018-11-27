import React from 'react'
import { Button } from 'reactstrap'
import './NoteListContainer.css'
import styled from 'styled-components'

const H1 = styled.h1 `
font-size: 1.6rem ;
font-family: 'Archivo Black'
`

const ContainerStyle = styled.div `
border: 2px solid black ;
width: 40%  ;
height: 500px ;

`
export class NoteListContainer extends React.Component {
  render() {
    return (
      <ContainerStyle className="note_list_container">
      <H1>Lambda Notes</H1>
      <Button outline color="success">View Your Notes.</Button>
      <Button outline color="success">Add Note +</Button>
      </ContainerStyle>
    )
  }
}

export default NoteListContainer
