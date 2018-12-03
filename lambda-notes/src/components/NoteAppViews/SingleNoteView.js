import React from 'react'
import { connect } from 'react-redux'
import { getNote } from '../../actions/'
import { withRouter } from 'react-router'

export default class SingleNoteView extends React.Component {
 constructor(props){
  super(props)
  this.state = {
   note: {}
  }
 }

 singleNote = this.props.notes.find(note => `${note.id}` === `${this.id}`)

 componentDidMount(){
  // const id = this.props.match.params.noteId
   return () => this.props.getNote()
  console.log('Here')
 }

 render(){

  
  console.log('A STRING')
   return (
    <div>
    {this.props.title}
    I'M HERE
    </div>
  )}
}

const mapStateToProps = state => {
 const { notes } = state 
 return {
  notes: notes,
 }
}

connect(mapStateToProps, { getNote })(SingleNoteView)