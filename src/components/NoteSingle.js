import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NoteSingle = (props) => {
  const note = props.notes.filter(note => note.id === Number(props.match.params.id))[0]
  return (
    <Div1 className="NoteSingle">
      <H2>NoteSingle Functional Component</H2>
      <P>{note.title}</P>
      <P>{note.text}</P>
      <Link to={`/notes/${note.id}/edit`}>
        <Button onClick={() => props.editNote(Number(note.id))}>Edit Current Note</Button>
      </Link>
      <Button onClick={() => props.deleteNote(Number(note.id))}>Delete Current Note</Button>
    </Div1>
  )
}

const Div1 = styled.div``
const H2 = styled.h2``
const P =  styled.p``
const Button = styled.button``

export default NoteSingle