import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NotesMain = (props) => {
  return (
    <Div1 className="NotesMain">
      <H2>Your Notes:</H2>
      <Div2>
        {
          props.notes.map(note => 
            <Div3 key={note.id}>
              <H3>{note.title}</H3>
              <Hr />
              <P>{note.text.substring(0, 150)}...</P>
              <P2>Tags:&nbsp;
                {
                  note.tags.map(function(note, index) {
                    return <span key={`tag${index}`}>{ (index ? ', ' : '') + note }</span>; 
                  })
                }
              </P2>
              <Link to={`/notes/${note.id}`}>
                <Button>View Note</Button>
              </Link>
            </Div3>
          )
        }
      </Div2>
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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Div3 = styled.div`
  border: 1px solid #B7B7B7;
  max-width: 31%;
  min-width: 31%;
  height: 200px;
  margin-bottom: 4%;
  padding: 0 2%;
  background: white;
`
const H2 = styled.h2`
  margin-top: 8%;
`
const H3 = styled.h3`
  margin: 8% 0 2% 0;
`
const P = styled.p``
const P2 = styled.p`
  font-size: 1.2rem;
`
const Button = styled.button`
  width: 50%;
  padding: 0;
  font-size: 1.2rem;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
`
const Hr = styled.hr`
  margin: 0;
`

export default NotesMain