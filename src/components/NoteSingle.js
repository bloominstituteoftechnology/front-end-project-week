import React from 'react'
import styled from 'styled-components'

const NoteSingle = (props) => {
  const note = props.notes.filter(note => note.id === Number(props.match.params.id))[0]
  return (
    <Div1 className="NoteSingle">
      <H2>NoteSingle Functional Component</H2>
      <p>{note.title}</p>
      <p>{note.text}</p>
    </Div1>
  )
}

const Div1 = styled.div``
const H2 = styled.h2``

export default NoteSingle