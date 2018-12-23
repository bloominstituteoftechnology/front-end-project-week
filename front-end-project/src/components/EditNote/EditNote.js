import React, { Component } from "react";
import "./index.css";
import axios from 'axios';

class EditNote extends Component {
  state={
    content:'',
    title:'',
    id:null
  }

  handleInputChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    console.log('event name', event.target.name);
    console.log('event value', event.target.value);
    this.setState({ [name] : value });
  };
  editNote = (id) => {
    console.log(id);
    let title = this.state.title;
    let content = this.state.content;
  axios
    .put(`http://localhost:8000/notes/:${id}`,{title, content})
    .then(response => response.data)
    .catch(error => console.log(error));
  }
  render() {
    return (
      <div classname="noteView_container">
        <div className="noteView_topContent">
          <h3 className="content_header">Edit Note:</h3>
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
          name="title"
          onChange={this.handleInputChange}
        />
        <textarea
          className="createNote_body"
          placeholder="Note Content"
          rows="20"
          name="content"
          onChange={this.handleInputChange}
        />
        <a href="#" className='button_link'>
          <div className="nav_button createNote_button" onClick={() => {this.editNote(this.state.id)}>Update</div>
        </a>
      </div>
    );
  }
}

export default EditNote;