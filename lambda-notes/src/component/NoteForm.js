import React, { Component } from 'react';
import axios from 'axios';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: ''
    };
  }
  addNote = event => {
    event.preventDefault();
    axios
      .post('https://fe-notes.herokuapp.com/note/create', this.state)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
    this.setState({
      title: '',
      textBody: ''
    });
    this.props.history.push('/');
  };

  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        console.log('response', response);
      })
      .catch(error => console.log(error));
  };
  deleteHandler = event => {
    event.preventDefault();
    this.deleteNote(this.state.note._id);
    this.props.history.push('/');
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addNote}>
          <input
            onChange={this.changeHandler}
            type="text"
            placeholder="title"
            value={this.state.title}
            name="title"
          />
          <input
            onChange={this.changeHandler}
            type="textarea"
            placeholder="text"
            value={this.state.textBody}
            name="textBody"
          />
          <button onClick={this.addNote} type="submit">
            Add Note
          </button>
        </form>
      </div>
    );
  }
}
export default NoteForm;
