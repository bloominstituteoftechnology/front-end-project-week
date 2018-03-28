import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './UpdateNote.css';

class UpdateNote extends Component {

  handleUpdate(event) {
    event.preventDefault();
    this.props.updateNote(this.props.note.id);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="UpdateNote">
        <h3>Edit Note:</h3>
        <form className="update-form" onSubmit={this.handleUpdate.bind(this)}>
        <input required type="text" placeholder="Note Title" value={this.props.title} onChange={this.props.newTitle}/>
        <input required type="text" placeholder="Note Content" value={this.props.content} onChange={this.props.newContent}/>
        <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default withRouter(UpdateNote);