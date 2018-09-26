import React, { Component } from 'react';
import axios from 'axios';

export default class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.match.params.id,
      title:'',
      textBody: '' 
    };
  }

  editNote = (e) => {
    e.preventDefault();
    axios
   .put(`https://killer-notes.herokuapp.com/note/edit/${this.props.match.params.id}`, this.state)
    .then(() => this.props.history.push(`/notes/${this.props.match.params.id}`))
    .catch(err => {
      console.error(err);
    });
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    console.log(this.props);
    return(
      <div className='new-note'>
        <h3>Edit Note:</h3>
        <form onSubmit={this.editNote}>
          <input 
            type='text'
            onChange={this.handleInput}
            placeholder='Note Title'
            value={this.state.title}
            name='title'
          />
          <input 
            type='text'
            onChange={this.handleInput}
            placeholder='Note Content'
            value={this.state.textBody}
            name='textBody'
          />
          <button type='submit'>Update</button>
        </form>
      </div>
    );
  }
}