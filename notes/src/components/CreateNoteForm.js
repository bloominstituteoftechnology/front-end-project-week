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

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  submitHandler = ev => {
      ev.preventDefault();
      this.props.addNote(this.state);
      this.props.history.push('/')
    }

  render(){
    return(
      <form onSubmit={this.submitHandler}>
          <input
              type='text'
              name='title'
              placeholder='Note Title'
              onChange={this.handleChange}
              value={this.state.title}
            />

            <input
              type='text'
              name='textBody'
              placeholder='Note Content'
              onChange={this.handleChange}
              value={this.state.textBody}
            />
          <button type='submit'>Save</button>
          
      </form>
    )
  }
};

export default CreateNoteForm;
