import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const H1 = styled.h1 `
font-size: 1.6rem ;
font-family: 'Archivo Black'
`

const ContainerStyle = styled.div `
border: 2px solid black ;
max-width: 150px  ;
width: 100% ;
height: 800px ;
background: gray ;
`

const NoteList = props => {
 return (
      <ContainerStyle>
       <H1>Lambda Notes</H1>
       <Link to="/"><Button color="info">View Your Notes.</Button></Link>
       {' '}
       <Link to="/new"><Button color="info">Add Note +</Button></Link>
       <Link to="/delete" ><Button>Delete</Button></Link>
      </ContainerStyle>
    )
}

export default NoteList