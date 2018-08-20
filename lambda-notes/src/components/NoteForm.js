import React, { Component } from "react";
import axios from 'axios';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: "",
      content: "",
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


    //Add
    handleAddNote = e => {
      const note = {
        title: this.state.title,
        content: this.state.content
      }
      axios
      .post('http://localhost:8000/api/notes', note)
      .then(response => {
        this.setState({
          title: '',
          content: ''
        })
        this.setState({notes: response.data});  
        alert('note created!')
      })
      .catch(error => console.log(error));
    };

render() {
  return (
    <div className="note-form-div">
      <h2 className="note-form-title">Create New Note:</h2>
      <form>
        <input
          name="title"
          placeholder="      Note Title"
          onChange={this.handleInputChange}
          value={this.state.title}
          type="text"
          className="note-form"
          size="40"
        />
        <br />
        <br />
        <textarea
          type="text"
          cols="70"
          rows="7"
          name="content"
          placeholder="    Note Content"
          className="note-form-content"
          onChange={this.handleInputChange}
          value={this.state.content}
        />
          <button
            type="button"
            onClick={() =>
              this.handleAddNote({
                title: this.state.title,
                content: this.state.content
              })
            }
            className="save-button"
          >
            Save
          </button>
      </form>
    </div>
  );
};
}
// }

export default NoteForm;
