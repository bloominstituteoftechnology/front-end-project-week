import React from 'react'
import { withRouter } from 'react-router'
import {connect} from 'react-redux'
import { getNote } from '../../actions/index'
import SingleNoteView from './SingleNoteView'

export default class NoteView extends React.Component {

 render(){
  return (
    <div>
    {this.props.notes.map((note) => <SingleNoteView
     title={note.title}
     textBody={note.textBody}
     key={note.id}
     id={note.id}
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