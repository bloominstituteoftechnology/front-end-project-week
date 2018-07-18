import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

class CreateNote extends Component {
// constructor(props) {
//     super(props)
//this.
    state = {
        title: '',
        body: ''
    }


handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

handleSubmitNote = () => {
    this.props.createNote(this.state);
}

// createNote = e => {
//     e.preventDefault();
//     const newNote = {
//         title: this.state.title,
//         body: this.state.body,
//         id: this.state.id
//     }
//     this.state.notes.push(newNote);
//     this.setState({ title: '', body: '', id: 0 });
// }

render() {
    return (
        <div className="NoteForm">
        <Sidebar />
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
            rows='15'
            cols='90'
          />
          <Link to='/'> 
          <button onClick={this.handleSubmitNote}>Save</button>
          </Link>
          </div>
    )
}
}

export default CreateNote;