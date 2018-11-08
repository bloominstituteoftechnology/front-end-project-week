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
    const { history } = this.props;
    event.preventDefault();
    axios
      .post('https://fe-notes.herokuapp.com/note/create', this.state)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
    this.setState({
      title: '',
      textBody: ''
    });
    history.push('/');
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
