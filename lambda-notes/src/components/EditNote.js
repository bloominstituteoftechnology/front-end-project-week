import React from 'react';
import { connect } from 'react-redux';

import { edit_note, view_button_click } from '../actions/index';

import './css/EditNote.css';

class EditNote extends React.Component {
  state = {
    title: this.props.note.title,
    body: this.props.note.body,
  };

  render() {
    return (
      <div className="edit-note">
        <h1 className="edit-header"> Edit Note: </h1>
        <form onSubmit={this.handleSumbit}>
          <input
            className="title-input"
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <textarea
            className="body-input"
            type="text"
            value={this.state.body}
            onChange={this.handleBodyChange}
          />
          <button className="update" type="submit">
            Update
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
    if (this.state.body === '' && this.state.title === '') alert('Add a title and note!');
    else if (this.state.body === '') alert('Add a note!');
    else if (this.state.title === '') alert('Add a title!');
    else {
      const revisedNote = { ...this.props.note, title: this.state.title, body: this.state.body };
      this.props.edit_note(revisedNote);
      this.setState({
        title: '',
        body: '',
      });
      this.props.view_button_click();
    }
  };
}

const mapStateToProps = state => {
  return {
    note: state.note,
    current: state.current,
  };
};

export default connect(mapStateToProps, { edit_note, view_button_click })(EditNote);
