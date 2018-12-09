import React from 'react'
import Note from './Note'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchNotes } from '../../actions/index'
import { withRouter } from 'react-router'

const NoteContainerStyle = styled.div `
display: flex ;
 flex-direction: row ;
 flex-wrap: wrap ;
 margin: 5% 5% 5% 5%;
 padding: 5%;
 width: 80% ;
 justify-content: space-between ;
`

class NoteContainer extends React.Component {

 componentDidMount(){
  this.props.fetchNotes()
 }
 render(){
  return (
    <NoteContainerStyle className="note_container">
     {this.props.notes.map((note, index) => 
     <Note 
      key={index}
      title={note.title}
      textBody={note.textBody}
      id={note._id}
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


export default withRouter(connect(mapStateToProps, { fetchNotes })(NoteContainer))