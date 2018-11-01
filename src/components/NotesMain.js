import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Draggable from 'react-draggable'

const NotesMain = (props) => {
  const dragHandlers = { onStart: this.onStart, onStop: this.onStop }
  const filteredView = props.filteredNotes.length === 0 ? props.notes : props.filteredNotes
  // console.log(props.notes.map(note => console.log(note.tags)))
  return (
    <Div1 className="NotesMain">
      <Div2>
        {
          filteredView.map(note =>
            <Draggable key={note.id} handle="strong" {...dragHandlers}>
              <Div3>
                <Div4>
                  <Strong>
                    <span role="img" aria-label="Thumbtack">📌</span>
                  </Strong>
                  &nbsp;
                  <H3>{note.title}</H3>
                </Div4>
                <P>{note.text.substring(0, 60)}...</P>
                <P2>Tags:&nbsp;
                  {
                    JSON.parse(note.tags).map((note, index) => {
                      return <span key={`tag${index}`}>{((index ? ', ' : '') + note).substring(0, 18)}</span>
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
      </Div2>

      {/* <Div5>
        <H2>All tags:</H2>
        {
          props.tags.map((tag, index) => {
            return <Span1
              key={`tag${index}`}
              onClick={(e) => props.filterNotes(e, tag)}
            >
              {((index ? ', ' : '') + tag)}
            </Span1>
          })
        }
      </Div5> */}
    </Div1>
  )
}

const Div1 = styled.div`
`
const Div2 = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Div3 = styled.div`
  border: 2px solid #DADCE0;
  border-radius: 10px;
  max-width: 31%;
  min-width: 31%;
  height: 300px;
  margin: 1%;
  padding: 2%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &:hover {
    box-shadow: 0 0 2px gray;
  }
`
const Div4 = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`
// const Div5 = styled.div`
//   display: block;
//   width: 100%;
// `
const H3 = styled.h3`
  font-size: 2rem;
  /* margin: 8% 0 2% 0; */
  font-family: 'Goudy Bookletter 1911';
`
const P = styled.p`
`
const P2 = styled.p`
  font-size: 1.4rem;
  margin: 0;
`
const Strong = styled.strong`
  font-size: 2rem;
`
const Button = styled.button`
`
// const Hr = styled.hr`
//   margin: 0;
//   width: 100%;
// `
// const Span1 = styled.span`
//   font-size: 1.6rem;
//   text-decoration: underline;
//   color: blue;
// `

export default NotesMain
