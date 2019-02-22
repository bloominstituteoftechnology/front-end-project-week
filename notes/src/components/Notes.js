import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import CreateNote from './CreateNote';
import NotesPreview from './NotesPreview';
import ViewOneNote from './ViewOneNote';
import DeleteNote from './DeleteNote';
import EditNote from './EditNote';

import { getNotes } from "../Actions";
import { connect } from "react-redux";

class Notes extends Component {
  constructor(props){
      super(props);
      this.state = {
          notes: [],
          loading: true,
      }
  }
  componentDidMount() {
    this.props.getNotes();
//     axios
//         .get(`https://fe-notes.herokuapp.com/note/get/all`)
//         .then(response => {
//             this.setState({
//                 notes: response.data,
//                 loading: false,
//             });
//         })
//         .catch(err => console.log(err));
// }
  }
addNoteOnServer = newNote => {
  this.setState({notes: newNote});
}


render() {
  return (
    <div> 
    <Route
      path="/create"
      render={props =>
      <CreateNote {...props} notes={this.state.notes} /> }
       />

      <Route 
      exact path="/"
      render={props=>
      <NotesPreview {...props} notes={this.state.notes} /> }
      />

       <Route 
       path="/note/:id"
      render={props=>
      <ViewOneNote {...props} notes={this.state.notes} /> }
      />

        <Route 
      path="/note/delete/:id"
      render={props=>
      <DeleteNote {...props} notes={this.state.notes} deleteNote={this.deleteNote} /> }
      />

        <Route 
      path="/note/edit/:id"
      render={props=>
      <EditNote /> }
      /> 
      
  </div>

  )
  }
}
 
  export default connect (null, {getNotes})(Notes);
