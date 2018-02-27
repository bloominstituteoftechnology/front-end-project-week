import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../Redux/actions';
import './NewNote.css';

class NewNote extends Component {
  state = {
    title: '',
    body: '',
  };

  updateNote = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  addNote = event => {
    event.preventDefault();

    this.props.addNote(this.state);

    this.setState({
      title: '',
      body: '',
    });
  };

  render() {
    return (
      <div className="main-body">
        <div className="main-body_header">Create New Note:</div>
        <div className="main-body_fields">
          <form type="submit" onSubmit={this.addNote}>
            <input
              type="text"
              className="body-input"
              placeholder="Note Title"
              onChange={this.updateNote}
              name="title"
              value={this.state.title}
            />
            <input
              type="text"
              className="title-input"
              placeholder="Note Content"
              onChange={this.updateNote}
              name="body"
              value={this.state.body}
            />
            <input type="submit" value="submit" className="submit-button" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addNote })(NewNote);
