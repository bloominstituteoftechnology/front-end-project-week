import React from 'react';
// import './NoteContainer.css';
import styled from 'styled-components' 

const NoteContainer = styled.section `
  display: flex ;
  flex-direction: row ;
  flex-wrap: wrap ;
`
const NoteStyling = styled.div ` 
 border: 1px solid black ;
`

const NoteTitle = styled.div `
 font-size: 1rem ;
 font-family: 'Archivo Black';
 overflow: hidden;
 text-overflow: ellipsis;
 width: 100px ;
`
const NoteBody = styled.article ` 
 width: 150px ;
 height: 100px ;
 overflow: hidden;
 text-overflow: ellipsis ;
 font-family: 'Courier New', Courier, monospace ;
 font-size: 0.8rem ;
`

const Note = props => {
  return (
    <div>
     <NoteContainer>
      <NoteStyling>
       <NoteTitle>{props.title}</NoteTitle>
        <NoteBody className="note_body">{props.textBody}</NoteBody>
      </NoteStyling>
     </NoteContainer>
    </div>
  )
}

export default Note
