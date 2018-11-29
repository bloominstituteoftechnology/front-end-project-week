import React from 'react'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'
import CreateView from '../NoteAppViews/CreateView'
import styled from 'styled-components'
const H1 = styled.h1 `
font-size: 1.6rem ;
font-family: 'Archivo Black'
`

const ContainerStyle = styled.div `
border: 2px solid black ;
width: 40%  ;
height: 800px ;
background: gray ;
`

const NoteList = props => {
 return (
      <ContainerStyle>
      <H1>Lambda Notes</H1>
      <Link to="/"><Button outline color="success">View Your Notes.</Button></Link>
      <Link to="/new"><Button outline color="success">Add Note +</Button></Link>
      <Route to="/new" component={CreateView} />
      </ContainerStyle>
    )
}

export default NoteList