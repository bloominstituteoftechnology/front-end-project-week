import React from 'react'
import { connect } from 'react-redux'
import { getNote } from '../../actions/'
import { Link, Route } from 'react-router-dom'
import DeleteView from './DeleteView';

export default class SingleNoteView extends React.Component {
 constructor(props){
  super(props)
  this.state = {
   noteTitle: '',
   noteBody: ''
  }
 }

 componentDidMount(){
  const singleNote = this.props.notes.find(note => this.props.match.params.url === note.id)
  this.setState({
   noteTitle: singleNote.title,
   noteBody: singleNote.textBody
  })
 }

 render(){
  
   return (
    <div>
    <div>
     {this.state.noteTitle}
    {this.state.noteBody}
    </div>
    
    <button>
    <Route path="/delete" render={() => <DeleteView/>} />
    <Link to="/delete/">
     Delete
    </Link>
    </button>
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