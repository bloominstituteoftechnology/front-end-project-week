import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

class CreateNote extends Component {
constructor(props) {
    super(props)
    this.state = 
        {
        title: '',
        body: '',
        id: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitNote = this.handleSubmitNote.bind(this);
}


handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

handleSubmitNote = (e) => {
    e.preventDefault();
    const newNote = {
            title: this.state.title,
            body: this.state.body,
            id: this.state.id
            }
    let newArr= this.props.notes.slice();
    console.log(newArr);
    newArr.push({title: this.state.title, body: this.state.body})
    this.setState({ title: '', body: '', id: '' });
    this.props.createNote(this.state);
    // this.props.history.push('/');

}

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
          <Link to={'/'}> 
          <button onClick={this.handleSubmitNote}>Save</button>
          </Link>
          </div>
    )
}
}

export default CreateNote;