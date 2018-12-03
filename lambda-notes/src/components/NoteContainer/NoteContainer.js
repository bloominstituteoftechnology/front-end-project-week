import React from 'react'
import Note from './Note'
import styled from 'styled-components'
import { connect } from 'react-redux'
import NoteView from '../NoteAppViews/NoteView'
import NoteTextArea from '../NoteContainer/NoteTextArea'

const NoteContainerStyle = styled.div `
 display: flex ;
 flex-direction: row ;
 flex-wrap: wrap ;
`
class NoteContainer extends React.Component {
 render(){
  return (
    <NoteContainerStyle className="note_container">
         <NoteTextArea />
         {this.props.notes.map((note, index) => 
         <Note 
          key={index}
          title={note.title}
          textBody={note.textBody}
          {...this.props}
          id={note._id}
          note={note}
          index={note.index}
         />
         )}
    </NoteContainerStyle>
  )
 }
  
}

const mapStateToProps = state => {
 const { notes } = state 
 return {
  notes: notes
 }
}


export default connect(mapStateToProps)(NoteContainer)