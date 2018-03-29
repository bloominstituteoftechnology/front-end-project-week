import React, { Component } from 'react';
// import { addNote } from '/actions/index.js';
// import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class NoteForm extends Component {
    state = {
        title: '',
        content: '',
        redirect: false,
      };

    handleTitleInput = event => {
      this.setState({ title: event.target.value });
    };

    handleContentInput = event => {
      this.setState({ content: event.target.value });
    };

    handleSave = () => {
      let newNote ={
        title: this.state.title,
        content: this.state.content,
      }
      this.props.saveNewNote(newNote);
    }
   

  render() {
    return (
      <div>
        <h3 className='heading'>Create New Note:</h3>
        <form onSubmit={this.createNote}>
          <input
            className='formtitle'
            type='text'
            placeholder='Note Title'
            onChange={this.updateNote}
            name='title'
            value={this.state.title}
          />
          <textarea
            className='formcontent'
            type='text'
            placeholder='Note Content'
            onChange={this.updateNote}
            name='content'
            value={this.state.content}
          />
          <button className='save-btn' type='submit'>
            Save
          </button>
        </form>
        {this.state.redirect ? <Redirect to='/noteslist' /> : null}
      </div>
    );
  }

  updateNote = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };
  
  // createNote = event => {
  //   event.preventDefault();
  //   this.props.addNote(this.state);
  //   this.setState({ redirect: true });
  // };
}

export default NoteForm;