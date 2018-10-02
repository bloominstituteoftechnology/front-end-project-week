import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const NotesMain = (props) => {
    
  
    return (
      <Div1 className="NotesMain">
        <H2>Your Notes:</H2>
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
                        note.tags.map((note, index) => {
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
      <Div5>
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
      </Div5>

      </Div1>
    )
  }
//go w/styled componenets
//extra elements here too if time allows

  export default NotesMain