import React, { Component } from 'react';
import axios from 'axios';

const URL = "http://localhost:3000/"


class CreateNote extends Component {
constructor(props) {
    super(props)
    this.state = {
        title: '',
        note: '',
    }
}

createNote = e => {
    e.preventDefault();
    const newNote = {
        title: this.state.title,
        note: this.state.note
    };
axios
.post(URL, newNote)
.then(response => {
    console.log("POST RESPONSE", response);
      this.props.handleSetData(response.data);
    })
    .catch(err => {
      console.log(err);
    })
    this.setState({
        title: '',
        note: ''
});
}

handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

render() {
    return (
        <div className="NoteForm">
        <input
            onChange={this.handleInputChange}
            placeholder="Title"
            value={this.state.title}
            name="title"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Note"
            value={this.state.note}
            name="note"
          />
          </div>
    )
}
}

export default CreateNote;