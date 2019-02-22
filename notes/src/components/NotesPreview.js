import React, { Component } from 'react';
import './Notes.css';
//import axios from 'axios';
import { Link } from 'react-router-dom';

import { getNotes } from "../Actions";
import { connect } from "react-redux";

//   getNotes,
//   addNote,
//   updateNote,
//   deleteNote  
// } from "../Actions";

class NotesPreview extends Component {
  constructor(props){
  super(props);
  this.state ={
    notes:[],
    loading:true,
  }  
}
componentDidMount() {

  this.props.getNotes();
  
  // axios
  //     .get(`https://fe-notes.herokuapp.com/note/get/all`)
     
  //     .then(response => {
  //       console.log(response)
  //         this.setState({
  //           notes:response.data,
  //           loading:false,
  //       })
  //     })
  //     .catch(err => console.log(err));

}
render() {
  return (
    <div className="contentContainer">

      <h2>Your Notes: </h2>
      <div className="notesContainer">
        {this.state.notes.map((note) => (
        <Link key={note._id} className="note" to={`/note/${note._id}`}>
          <h3>{note.title}</h3>
          <p>{note.textBody}</p>   
        </Link>   
        ))}          
      </div>
        
    </div>
  )
}
}
const mapStateToPops = state =>{
  console.log(state);
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes
  }
}

export default connect (mapStateToPops, { getNotes })(NotesPreview); 

