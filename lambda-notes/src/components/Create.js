import React from 'react';
import '../style/create.css';
import {connect} from 'react-redux';
import {createNote} from '../actions/createAction'

 class createNoteForm extends React.Component {
   constructor(){
       super()
       this.state = {
           note: {
               title:'',
               content:''
           }
       }
   }


   //TODO add redirect to '/' with updated list view
   handleSubmit = (e) => {
       e.preventDefault()
       this.props.createNote(this.state.note)
   }
   titleChange = e => {
       this.setState({note:{...this.state.note,title:e.target.value}})
   }
   contentChange = e => {
       this.setState({note:{...this.state.note,content:e.target.value}})
   }
   
    render(){
        return (
        <div className = "create">
            <h2> Create New Note: </h2>
        <form onSubmit = {this.handleSubmit}className = "create-form">
            <input onChange = {this.titleChange}value = {this.state.note.title} placeholder = "Note Title"/>
            <textarea onChange = {this.contentChange}value = {this.state.note.content} placeholder = "Note Content" cols = "75" rows = "25"/>
            <button> Save </button>
            </form>
            </div>
        )
    }
}

export default connect(null,{createNote})(createNoteForm);