import React, { Component } from 'react';
import Sidebar from './Sidebar';


class EditNote extends Component {
constructor(props) {
    super(props)
    this.state = {
        note: {
        title: '',
        body: '',
    }
}
}

editNote = e => {
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
        <Sidebar />
        <input
            onChange={this.handleInputChange}
            placeholder="Title"
            value={this.state.title}
            name="title"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Content"
            value={this.state.body}
            name="body"
          />
          </div>
    )
}
}

export default EditNote;