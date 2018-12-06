import React from 'react'
import { withRouter } from 'react-router'
import {connect} from 'react-redux'
import { getNote } from '../../actions/index'
import SingleNoteView from './SingleNoteView'

export default class NoteView extends React.Component {

 componentDidMount(){
  const id = this.props.match.params.noteId
 
  console.log(id)
 }
singleNote = this.props.notes.find((note) => note.id === this.id)
 render(){
  console.log(this.singleNote)
  return (
    <div>
    {this.props.notes.map((note) => <SingleNoteView
     title={note.title}
     textBody={note.textBody}
     key={note.id}
     id={note.id}
     singleNote={this.singleNote}
     {...this.props}
     />)}
    </div>
  )}
}
const mapStateToProps = state => {
 const { notes } = state
 return {
  notes: notes 
 }
}
withRouter(connect(mapStateToProps, {getNote})(NoteView))