import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const NotesMain = (props) => {
    
 
  const filteredView = props.filteredNotes.length === 0 ? props.notes : props.filteredNotes
    
  return (
      <Div1 className="NotesMain">
        <H1>Your Notes:</H1>
        <Div2>
        {
          filteredView.map(note => 
            
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
                        JSON.parse(note.tags).map((note, index) => {
                          return <span key={`tag${index}`}>{ ((index ? ', ' : '') + note).substring(0, 18)}</span>
                        })
                      }
                      ...
                    </P2>
                  <Link to={`/notes/${note.id}`}>
                    <Button>View Note</Button>
                  </Link>
              </Div3>
            
          )
        }
      </Div2>
      {/*<Div5>
        <H2>All tags:</H2>
        { 
          props.tags.map((tag, index) => {
            return <Span1 
              key={`tag${index}`} 
              onClick={(e) => props.filterNotes(e, tag)}
            >
              { ((index ? ', ' : '') + tag) }
            </Span1>
          })
        }
      </Div5>*/}

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
  justify-content: space-around;
  flex-wrap: wrap;
`
const Div3 = styled.div`
  border: 1px solid #B7B7B7;
  
`
const Div4 = styled.div`
  display: flex;
  justify-content: space-between;
`
const Div5 = styled.div`
  display: block;
  width: 100%;
`
const H1 = styled.h2`
  margin-top: 8%;
`
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
  
`
const Hr = styled.hr`
  margin: 0;
`
const Span1 = styled.span`
  font-size: 1.6rem;
  
`


  export default NotesMain

  