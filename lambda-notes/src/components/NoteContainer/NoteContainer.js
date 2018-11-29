import React from 'react'
import Note from './Note'
import styled from 'styled-components'
import { connect } from 'react-redux'
import NoteTextArea from '../NoteContainer/NoteTextArea'

const NoteContainerStyle = styled.div `
 display: flex ;
 flex-direction: row ;
 flex-wrap: wrap ;
`
const NoteContainer = props => {
  return (
    <NoteContainerStyle className="note_container">
         <NoteTextArea />
         {props.notes.map((note, index) => <Note 
          key={index}
          title={note.title}
          textBody={note.textBody}
          match={props.match}
         />)}
    </NoteContainerStyle>
  )
}

const mapStateToProps = state => {
 const { notes } = state 
 return {
  notes: notes
 }
}


export default connect(mapStateToProps)(NoteContainer)