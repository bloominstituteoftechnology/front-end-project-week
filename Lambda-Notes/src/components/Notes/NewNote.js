import React, { Component } from 'react';
import axios from 'axios';

export default class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
  }

  handleNewInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCreateNote = () => {
    const note = {
      title: this.state.title,
      content: this.state.content
    };

    axios
      .post('http://localhost:5000/notes', note)
      .then(savedNote => {
        console.log(note);

        this.props.getNotes();
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ title: '', content: '' });
  };

  render() {
    return (
      <div>
        <h1>Create New Note:</h1>
        <form>
          <label>
            <input
              type="text"
              onChange={this.handleNewInput}
              name="title"
              value={this.state.title}
              placeholder="Note Title"
            />
          </label>

          <label>
            <input
              type="text"
              onChange={this.handleNewInput}
              name="content"
              value={this.state.content}
              placeholder="Note Content"
            />
          </label>

          <button type="button" onClick={this.handleCreateNote}>
            Save
          </button>
        </form>
      </div>
    );
  }
}
