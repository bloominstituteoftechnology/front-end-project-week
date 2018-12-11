import React from 'react';
import axios from 'axios';

class NoteForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      content: ''
    };
  }

  addNote = event => {
    event.preventDefault();
    // props.history.push(`/note/get/${note._id}`); history push here

    axios
      .post('http://localhost:9000/api/notes', {
        title: this.state.title,
        content: this.state.content
        // textBody: this.state.textBody
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));

    this.setState({
      title: '',
      textBody: ''
    });
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clickHandler = event => {
    event.preventDefault();
    this.props.history.push('/');
  };

  render() {
    return (
      <div className='noteSubmit'>
        <h2>Create New Note</h2>
        <form onSubmit={this.addNote} className='noteForm'>
          <input
            onChange={this.handleInputChange}
            placeholder='Note Title'
            value={this.state.title}
            name='title'
            className='noteForm__input'
          />
          <br />

          <input
            onChange={this.handleInputChange}
            placeholder='Note Content'
            value={this.state.content}
            name='content'
            className='noteForm__input--big'
          />
          <button type='submit' className='btn'>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default NoteForm;
