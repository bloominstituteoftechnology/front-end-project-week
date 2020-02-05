import React from 'react';
import axios from 'axios';

class CreateNoteForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      textBody: ''
    };
  }

  submitHandler = ev => {
      ev.preventDefault();
      this.props.addNote(this.props.note);
      this.props.history.push('/')
    }

  render(){
    return(
      <div className='create-note-container'>
      <h3>Create New Note: </h3>
      <form onSubmit={this.submitHandler}>
        <div>
          <input
              className='title-field'
              type='text'
              name='title'
              placeholder='Note Title'
              autofocus
              onChange={this.props.handleChange}
              value={this.props.note.title}
            />
        </div>
        <div>
        <textarea
          className='textBody-field'
          rows = '10'
          cols = '60'
          name = 'textBody'
          placeholder='Note Content'
          value = {this.props.note.textBody}
          onChange={this.props.handleChange}>Note Content</textarea>
        </div>
        <div>
          <button className='create-form-button' type='submit'>Save</button>
        </div>
      </form>
      </div>
    )
  }
};

export default CreateNoteForm;
