import React from 'react'
import Note from './Note'
import { connect } from 'react-redux'
import { fetchNotes } from '../../actions/index'
import { withRouter } from 'react-router'
import { NoteContainerStyle } from './styled-components/NoteContainerStyledComponents'

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
      id={note.id}
      {...this.props}
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