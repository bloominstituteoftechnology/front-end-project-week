import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../styles/NewNote.css';

import { addNote } from '../actions';

class NewNote extends React.Component {
  state = {
    newNote: {
      title: '',
      content: '',
    },
    redirect: false,
  };

  submitNewNote = event => {
    event.preventDefault();
    this.props.addNote(this.state.newNote);
    this.setState({
      redirect: true,
    });
  };

  updateField = event => {
    this.setState({
      newNote: {
        ...this.state.newNote,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="newNote__container">
        <div className="newNote__header">Create New Note:</div>
        <form className="newNote__form" onSubmit={this.submitNewNote}>
          <input
            type="text"
            value={this.state.newNote.title}
            name="title"
            placeholder="Note Title"
            onChange={this.updateField}
            className="newNote__title-field"
          />
          <textarea
            name="content"
            value={this.state.newNote.content}
            placeholder="Note Content"
            onChange={this.updateField}
            className="newNote__content-field"
          />
          <input type="submit" value="Save" className="newNote__submit"/>
        </form>
        {this.state.redirect && <Redirect to="/" />}
      </div>
    );
  }
}

export default connect(null, { addNote })(NewNote);
