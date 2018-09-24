import React from 'react'
import styled from 'styled-components'

const NotesBar = () => {
  return (
    <Div1 className="NotesBar">
      <H2>NotesBar Functional Component</H2>
      <Button>My Notes</Button>
      <Button>New Notes</Button>
    </Div1>
  )
}

const Div1 = styled.div``
const H2 = styled.h2``
const Button = styled.button``

export default NotesBar