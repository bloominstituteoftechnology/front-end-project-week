import React from 'react'
import Note from './Note'
import styled from 'styled-components'
const NoteContainerStyle = styled.div `
 display: flex ;
 flex-direction: row ;
 flex-wrap: wrap ;
`
const NoteContainer = props => {
  return (
    <NoteContainerStyle className="note_container">
       {props.notes.map((note, index) => <Note
        textBody={note.textBody}
        title={note.title}
         />)}
    </NoteContainerStyle>
  )
}


export default NoteContainer