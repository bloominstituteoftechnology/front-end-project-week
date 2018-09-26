import React, { Component } from "react";
import "./index.css";
import axios from 'axios';

class CreateNote extends Component {
  state = {
    response:''
  };
  createNotes = () => {
    console.log('hi');
  
  axios
    .post('http://localhost:8000/notes')
    .then(response => this.setState({response: response.data}))
    .catch(error => console.log(error));
  }
  
  componentDidMount(){
    this.createNotes();
    
  }
  render() {
    return (
      <div classname="noteView_container">
        <div className="noteView_topContent">
          <h3 className="content_header">Create New Note:</h3>
          <div>
            <a href="#" className="edit_delete">
              edit
            </a>
            <a href="#" className="edit_delete">
              delete
            </a>
          </div>
        </div>
        <div className="createNote_form" />
        <input
          type="text"
          className="createNote_title"
          placeholder="Note Title"
        />
        <textarea
          className="createNote_body"
          placeholder="Note Content"
          rows="20"
        />
        <a href="#" className='button_link'>
          <div className="nav_button createNote_button">Save</div>
        </a>
      </div>
    );
  }
}

export default CreateNote;
