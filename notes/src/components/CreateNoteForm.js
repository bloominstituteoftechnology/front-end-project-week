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
      <form onSubmit={this.submitHandler}>
          <input
              type='text'
              name='title'
              placeholder='Note Title'
              onChange={this.props.handleChange}
              value={this.props.note.title}
            />

            <input
              type='text'
              name='textBody'
              placeholder='Note Content'
              onChange={this.props.handleChange}
              value={this.props.note.textBody}
            />
          <button type='submit'>Save</button>
      </form>
    )
  }
};

export default CreateNoteForm;
