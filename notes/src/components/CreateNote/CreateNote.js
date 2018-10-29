import React, { Component } from 'react';
import axios from 'axios';

export default class CreateNote extends Component {
  state = {
    title: '',
    textBody: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  saveNote = (event) => {
    event.preventDefault();
    const { title, textBody } = this.state;
    const newNote = { title, textBody };
    console.log(this.state.title);
    console.log(this.state.textBody);
    if (this.state.title.length > 0 && this.state.textBody.length > 0) {
      axios
        .post('https://fe-notes.herokuapp.com/note/create', newNote)
        .then(() => {
          this.setState({
            title: '',
            textBody: '',
          });
          this.props.history.push('/');
        })
        .catch((error) => console.error(error));
    } else {
      window.alert('Please fill in both Title and Content fields to submit a new note');
    }
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="title"
            placeholder="Note Title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <textarea
            name="textBody"
            placeholder="Note Content"
            onChange={this.handleChange}
            value={this.state.textBody}
          />
          <button onClick={this.saveNote}>Save</button>
        </form>
      </div>
    );
  }
}
