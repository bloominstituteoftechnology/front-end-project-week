import React from 'react';
import { connect } from 'react-redux';

import { addNote } from '../actions';

class NewNote extends React.Component {
  state = {
    title: '',
    content: '',
  };

  submitNewNote = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: '',
      content: ''
    })
  }

  updateField = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="newNote__container">
        <div className="newNote__header">Create New Note:</div>
        <div className="newNote__form">
          <form onSubmit={this.submitNewNote}>
            <input
              type="text"
              value={this.state.title}
              name="title"
              placeholder="Note Title"
              onChange={this.updateField}
              className="newNote__title-field"
            />
            <textarea
              name="content"
              value={this.state.content}
              placeholder="Note Content"
              onChange={this.updateField}
              className="newNote__content-field"
            />
            <input type="submit" value="Save" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addNote })(NewNote);
