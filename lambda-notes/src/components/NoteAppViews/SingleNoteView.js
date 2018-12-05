import React from 'react'
import { connect } from 'react-redux'
import { getNote } from '../../actions/'

export default class SingleNoteView extends React.Component {
 constructor(props){
  super(props)
  this.state = {
   note: {}
  }
 }

 id = this.props.match.params.noteId
 singleNote = this.props.notes.find(note => note.id === this.id)

 componentDidMount(){
 
   
   // this.setState({
   //  note: this.singleNote
   // })
   // return () => this.props.getNote(id)
 }

 render(){
  console.log(this.id)
  console.log(this.singleNote)
   return (
    <div>
    {this.props.title}
    {/* {this.singleNote.title} */}
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