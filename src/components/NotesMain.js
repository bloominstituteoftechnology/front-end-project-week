import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Draggable from 'react-draggable'

const NotesMain = (props) => {
  const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
  return (
    <Div1 className="NotesMain">
      <H2>Your Notes:</H2>
      <Div2>
        {
          props.notes.map(note => 
            <Draggable key={note.id} handle="strong" {...dragHandlers}>
              <Div3>
                  <Div4>
                    <H3>{note.title}</H3>
                    <Strong>
                      <span role="img" aria-label="Thumbtack">📌</span>
                    </Strong>
                  </Div4>
                  <Hr />
                  <P>{note.text.substring(0, 60)}...</P>
                    <P2>Tags:&nbsp;
                      {
                        note.tags.map(function(note, index) {
                          return <span key={`tag${index}`}>{ ((index ? ', ' : '') + note).substring(0, 18)}</span>
                        })
                      }
                      ...
                    </P2>
                  <Link to={`/notes/${note.id}`}>
                    <Button>View Note</Button>
                  </Link>
              </Div3>
            </Draggable>
          )
        }

        <Div5>
          <H2>All tags:</H2>
          <P>{props.tags.join(", ")}</P>
        </Div5>
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

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Div4 = styled.div`
  display: flex;
  justify-content: space-between;
`
const Div5 = styled.div``
const H2 = styled.h2`
  margin-top: 8%;
`
const H3 = styled.h3`
  font-size: 1.8rem;
  margin: 8% 0 2% 0;
`
const P = styled.p``
const P2 = styled.p`
  font-size: 1.2rem;
  margin: 0;
`
const Strong = styled.strong`
  font-size: 2rem;
`
const Button = styled.button`
  width: 50%;
  padding: 0;
  font-size: 1.2rem;
  margin: 5% auto;
  &:hover {
    cursor: pointer;
  }
`
const Hr = styled.hr`
  margin: 0;
`

export default NotesMain