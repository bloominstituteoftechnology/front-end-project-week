import React, { Component } from "react";
import { Axios } from 'axios';

class CreateNotes extends Component {
  state = {
      title: "",
      noteBody: ""
    };


    handleNoteChange = e => {
      this.setState({ [e.target.name]: e.target.value});
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      const note = { title: this.state.title, noteBody: this.state.noteBody };
      Axios
       .post("http://localhost:8000/api/createnotes", {note: note})
       .then(response => {
         console.log("POST RESPONSE: ", response);
       })
       .catch(err => console.log(err));
    }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleNoteChange}
            type="text"
            name="title"
            value={this.state.title}
            placeholder="title"
          />
          <textarea
            onChange={this.handleNoteChange}
            type="text"
            name="noteBody"
            value={this.state.noteBody}
            placeholder="body"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
};

export default CreateNotes;
