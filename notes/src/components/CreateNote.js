import React, { Component } from 'react';
import './Notes.css';
//import axios from 'axios';
import { connect } from "react-redux";
import { addNote } from "../Actions";

class CreateNote extends Component {
constructor(props) {
  super(props);
  this.state = {
    title:'',
    textBody:''

  }
}
inputChangehandler = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  })
} 
//React part:


// addNew = (e) => {
//   e.preventDefault();
//   axios
//       .post(`https://fe-notes.herokuapp.com/note/create`,this.state)       
      
//       .then((response) => {
       
//         this.props.addNoteOnServer(response.data)
//     })
//       .catch(err => console.log('Error', err));
//     this.setState({
//       title:'',
//       textBody:''
//     })
//   }


handleSubmit = event => {
  event.preventDefault();
  this.props.addNote(this.state);
  this.setState({ title:'', textBody:'' })

}
render() {
  return (
    <div className="contentContainer">
        <h2>Create New Note:</h2>
      <form className="form" onSubmit={this.handleSubmit}>
        <textarea className="title" 
              type='text' 
              name='title'
              placeholder='Note Title' 
              onChange={this.inputChangehandler}
              value={this.state.title} />

          <textarea className="textBody" 
              type='text' 
              name='textBody'
              placeholder='Note Content' 
              onChange={this.inputChangehandler}
              value={this.state.textBody} />
          <button className="button" type='submit'>Save</button>       
      </form>
    </div>
  )}
}
export default connect(null, {addNote})(CreateNote);

