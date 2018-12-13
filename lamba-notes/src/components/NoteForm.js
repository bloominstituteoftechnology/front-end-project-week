import React from 'react';
import axios from 'axios';

let APIUrl = 'https://bummingsnotes.herokuapp.com';

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

    axios
      .post(`${APIUrl}/api/notes`, {
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
        <h2 className='noteEdit__header'>Create New Note</h2>
        <form onSubmit={this.addNote} className='noteForm'>
          <input
            onChange={this.handleInputChange}
            placeholder='Note Title'
            value={this.state.title}
            name='title'
            className='noteEdit__input--title'
          />
          <br />

          <textarea
            onChange={this.handleInputChange}
            placeholder='Note Content'
            value={this.state.content}
            name='content'
            className='noteEdit__input--content'
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
