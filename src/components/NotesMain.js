import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NotesMain = (props) => {
  return (
    <Div1 className="NotesMain">
      <H2>NotesMain Functional Component</H2>
        {
          props.notes.map(note => 
            <Div2 key={note.id}>
              <H3>{note.title}</H3>
              <P>Note Tags: {note.tags}</P>
              <P>{note.text.substring(0, 20)}...</P>

              <Link to={`/notes/${note.id}`}>
                <Button>View Note</Button>
              </Link>
              <Button onClick={() => props.deleteNote(note.id)}>Delete Note</Button>
            </Div2>
          )
        }
    </Div1>
  )
}

const Div1 = styled.div``
const Div2 = styled.div``
const H2 = styled.h2``
const H3 = styled.h3``
const P = styled.p``
const Button = styled.button``

export default NotesMain