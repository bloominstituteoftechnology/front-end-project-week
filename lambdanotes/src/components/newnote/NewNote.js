import React, { Component } from 'react';
import "./NewNote.css"
import { Link } from 'react-router-dom';
import axios from 'axios';

class NewNote extends Component {
constructor(){
  super();
  this.state = {
    title: "",
    content: "",
  }
  this.onFormChange = this.onFormChange.bind(this);
}
onFormChange = event => {
this.setState({[event.target.name]: event.target.value})
}
onSaveClick = (e) => {
  // this.setState({id: this.state.id + 1});
  axios.post('http://localhost:8000/api/notes', {
    "title": this.state.title,
    "content": this.state.content
  })
  .then((response) => {
    console.log(response);
    this.props.addNote(this.state);
  })
  .catch(function (error) {
    console.log(error);
  });
}

  render() {
    return (
      <div>
        <h2>
          Create New Note:
        </h2>
        <form className="newnote-container">
          <input type="text" placeholder="Note Title" className="title-input" name="title" onChange={this.onFormChange}></input>
          <textarea rows="20" cols="50" className="body-input" placeholder="Note Content" name="content" onChange={this.onFormChange}></textarea>
          <Link to={"/"} style={{ textDecoration: 'none' }}>
            <button className="save-button" onClick={this.onSaveClick}>Save</button>
          </Link>
        </form>
      </div>
    );
  }

}

export default NewNote;
