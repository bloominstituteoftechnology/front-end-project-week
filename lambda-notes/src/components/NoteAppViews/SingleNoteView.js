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



 componentDidMount(){
 
    const id = this.props.match.params.noteId
   this.props.notes.filter(note => {
    if (note.id === id){
     this.setState({
      note: note
     })
    }})
 }

 render(){
  const singleNote = this.props.notes.filter(note => this.props.match.params.id === note.id)
  console.log(singleNote)
  
   return (
    <div>
    {/* {this.props.title} */}
    {singleNote.title}
    {singleNote.body}
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