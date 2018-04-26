import React, { Component } from "react";
import { connect } from 'react-redux';
import { addNoteActionCreator } from "./allActions";

import { notesReducer } from './notesReducer';

class AddNewNote extends Component{
    constructor(props){
     super(props)
     console.log('g',this.props)
     this.state={
         noteTitle:'',    
         noteText:'',

     }

    }


AddNewNoteHandler =(event)=>{
this.setState({[event.target.name]: event.target.value})
}

 render(){
     
 const  obj={
    title: this.state.noteText,
    text: this.state.noteTitle
}
// let nonEmptyObj ={};
// if (this.state.noteTitle !=='' && this.state.noteText !==''){
//     nonEmptyObj.title = this.state.noteTitle,
//      nonEmptyObj.text = this.state.noteText
// }

      return (
  <div className='NewNote'> 
          <p>Create new Note:</p>
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
            <button className='Button'            
            onClick={ ()=>{  
                if (this.state.noteText === '' && this.state.noteText === ''){ return;} else{             
                  this.props.addNoteActionCreator(obj)}; this.setState({ noteText: '', noteTitle: '' })                  
            }} >Save</button>
       </div>
    )
 }

}

 const mapStateToProps = (state)=>{
     console.log('gigo',state.notesReducer)
   
     return {

     }

 }
export default connect(mapStateToProps, {addNoteActionCreator})(AddNewNote)