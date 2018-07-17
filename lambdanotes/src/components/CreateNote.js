import React, { Component } from 'react';

class CreateNote extends Component {
constructor(props) {
    super(props)
    this.state = {
        title: '',
        body: '',
    }
}

createNote = e => {
    e.preventDefault();
    const newNote = {
        title: this.state.title,
        body: this.state.body
    };
}


handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

render() {
    return (
        <div className="NoteForm">
        <h1>Create New Note:</h1>
        <input
            onChange={this.handleInputChange}
            placeholder="Note Title"
            value={this.state.title}
            name="title"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Note Content"
            value={this.state.body}
            name="body"
          />
          <button>Save</button>
          </div>
    )
}
}

export default CreateNote;