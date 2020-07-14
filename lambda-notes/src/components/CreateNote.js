import React from 'react';
import { connect } from 'react-redux';

import { add_note, view_button_click } from '../actions/index';

import './css/CreateNote.css';

class CreateNote extends React.Component {
  state = {
    title: '',
    body: '',
  };

  render() {
    return (
      <div className="create">
        <h1 className="create-header"> Create New Note: </h1>
        <form onSubmit={this.handleSumbit}>
          <input
            className="title-input"
            type="text"
            placeholder="Note Title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <textarea
            className="body-input"
            type="text"
            placeholder="Note Content"
            value={this.state.body}
            onChange={this.handleBodyChange}
          />
          <button className="save" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };
  handleBodyChange = event => {
    this.setState({ body: event.target.value });
  };

  handleSumbit = event => {
    event.preventDefault();
    const dateString = new Date().toUTCString();
    const date = new Date();
    if (this.state.body === '' && this.state.title === '') alert('Add a title and note!');
    else if (this.state.body === '') alert('Add a note!');
    else if (this.state.title === '') alert('Add a title!');
    else {
      this.props.add_note({ ...this.state, date, dateString, checklist: [] });
      this.setState({
        title: '',
        body: '',
      });
      this.props.view_button_click();
    }
  };
}

export default connect(null, { add_note, view_button_click })(CreateNote);
