import React, { Component } from 'react';
 class CreateNoteView extends Component {
    constructor(props){
        super(props)
        this.state = {};
    }

    createNote = (event, id) => {
        event.preventDefault();
        
    }
  render() {
    return (
      <div>
        <h1>Create New Note</h1>
      </div>
    );
  }
}
 export default CreateNoteView;