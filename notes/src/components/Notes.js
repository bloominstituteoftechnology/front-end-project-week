import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import CreateNote from './CreateNote'
import NotesPreview from './NotesPreview';

class Notes extends Component {
  constructor(props){
      super(props);
      this.state = {
          notes: [],
          loading: true,
      }
  }
  componentDidMount() {
    axios
        .get(`https://fe-notes.herokuapp.com/note/get/all`)
        .then(response => {
            this.setState({
                notes: response.data,
                loading: false,
            });
        })
        .catch(err => console.log(err));
}

addNoteOnServer = newNote => {
  this.setState({notes: newNote});
}

refresh = response => {
    window.location.reload();
}
render() {
  return (
    <div> 
    <Route
      path="/create"
      render={props =>
      <CreateNote {...props} refresh={this.refresh} />
    }
      />
      <Route 
      exact path=""
      render={props=>
      <NotesPreview {...props} notes={this.state.notes} /> }
      
    
      
      />
</div>

  )}}
  export default Notes;
