import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NoteSingle = (props) => {
  const note = props.notes.filter(note => note.id === Number(props.match.params.id))[0]
  return (
    <Div1 className="NoteSingle">
      <Div2>
        <Link to={`/notes/${note.id}/edit`}>
          <P onClick={() => props.editNote(Number(note.id))}>edit</P>&nbsp;
        </Link>
        &nbsp;
        <Link to="/">
          <P onClick={() => props.deleteNote(Number(note.id))}>delete</P>
        </Link>
      </Div2>
      <H2>{note.title}</H2>
      <P>{note.text}</P>
      <P>Note Tags:<br />
        {
          note.tags.map(function(item, index) {
            return <span key={`tag${index}`}>{ (index ? ', ' : '') + item }</span>; 
          })
        }
      </P>
    </Div1>
  )
}

const Div1 = styled.div`
  padding: 1% 3%;
  width: 75%;
  background: #F2F1F2;
  min-height: 90vh;
`
const Div2 = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
`
const H2 = styled.h2`
  margin: 0;
`
const P =  styled.p`
  font-size: 1.6rem;
`

export default NoteSingle
