import React from 'react'
import { withRouter } from 'react-router'
import {connect} from 'react-redux'
import SingleNoteView from './SingleNoteView'

export default function NoteView(props) {

  return (
    <div>
    {props.notes.map((note, index) => <SingleNoteView
     title={note.title}
     textBody={note.textBody}
     key={note.id}
     id={note.id}
     />)}
    </div>
  )
}
const mapStateToProps = state => {
 const { notes } = state
 return {
  notes: notes 
 }
}
withRouter(connect(mapStateToProps)(NoteView))