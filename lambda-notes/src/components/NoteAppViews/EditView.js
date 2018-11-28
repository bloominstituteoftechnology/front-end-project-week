import React, { Component } from 'react'
import { Button } from 'reactstrap'
import styled from 'styled-components'
import NoteTextArea from '../NoteContainer/NoteTextArea'

const SideBar = styled.div `
border: 1px solid black ;
display: flex;
flex-direction: column ;
width: 20% ;
height: 500px ;
background-color: grey ;
`

const H1 = styled.h1 `
font-size: 1.6rem ;
font-family: 'Archivo Black'
`
const EditViewStyle = styled.div `
 display: flex;
 flex-direction: row;
 width: 75% ;
`
export default class EditView extends Component {
 componentDidMount(){
  const id = this.props.match.params.noteId
  console.log(id)
 }
  render() {
    return (
      <div>
      <EditViewStyle>
       <SideBar>
        <H1>Lambda Notes.</H1>
         <Button color="success">View Your Notes.</Button>
         <Button>Create New Note.</Button>
       </SideBar>
       <NoteTextArea/>
      </EditViewStyle>
      </div>
    )
  }
}
