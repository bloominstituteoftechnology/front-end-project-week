import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NotesBar = () => {
  return (
    <Div1 className="NotesBar">
      <H2>Lambda Notes</H2>
      <Link to="/">
        <Button>My Notes</Button>
      </Link>
      <Link to="/new">
        <Button>New Note</Button>
      </Link>
    </Div1>
  )
}

const Div1 = styled.div`
  width: 220px;
  border: 1px solid black;
`
const H2 = styled.h2``
const Button = styled.button``

export default NotesBar