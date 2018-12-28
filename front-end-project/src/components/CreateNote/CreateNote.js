import React, { Component } from "react";
import "./index.css";
import axios from 'axios';

class CreateNote extends Component {
  //input handler, state with inputs, pass info from state into setState
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
  createNote = (event) => {
    console.log('hi');
    let title = this.state.title;
    let content = this.state.content;
  axios
    .post('http://localhost:8000/notes',{title, content})
    .then(response => this.setState({notes: response.data}))
    .catch(error => console.log(error));
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
          onChange={this.handleInputChange}
          name="title"
        />
        <textarea
          className="createNote_body"
          placeholder="Note Content"
          rows="20"
          onChange={this.handleInputChange}
          name= 'content'
        />
        <a href="#" className='button_link'>
          <div className="nav_button createNote_button" onClick={this.createNote}>Save</div>
        </a>
      </div>
    );
  }
}

export default CreateNote;
