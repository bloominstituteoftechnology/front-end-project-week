import React, {Component} from "react";
import {connect} from 'react-redux'
import { editNoteActionCreator, addNoteActionCreator } from "./allActions";
import './addNewNote.css'


class EditNote extends Component{
    constructor(props){
    super(props)
   
    this.state={
        noteTitle:'',
        noteText:''
    }
    }
    // componentDidMount=()=>{
    //     this.props.addNoteActionCreator()
    // }
    AddNewNoteHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

 render(){ 
console.log('s',this.props.match.params) 
     console.log('p', this.props.notes[this.props.match.params.index])
     if (this.state.noteText!== "" && this.state.noteTitle !== "" ){
     this.props.notes[this.props.match.params.index]= {
         title: this.state.noteTitle, text: this.state.noteText}
     }
     console.log('f', this.props.notes[this.props.match.params.index])
  return (
      <div className='NewNote'>
          <h1>Edit a  Note:</h1>
          <input className="Input"
              placeholder="add new note"
              name="noteTitle"
              value={this.state.noteTitle}
              onChange={this.AddNewNoteHandler}
          />
          <textarea className="TextArea"
              type="text"
              placeholder="Note Content"
              name="noteText"
              value={this.state.noteText}
              onChange={this.AddNewNoteHandler}
          />
          <button className='Button' onClick={() => {
              
              this.props.addNoteActionCreator(this.props.notes[this.props.match.params.index]) 
          }} >Save</button>
      </div>
  )
 }
}
 const mapPropsToState = (state)=>{
     console.log('editsate', state.notesReducer)
     return {
         notes: state.notesReducer
     }
 }
export default connect(mapPropsToState, { editNoteActionCreator, addNoteActionCreator})(EditNote)