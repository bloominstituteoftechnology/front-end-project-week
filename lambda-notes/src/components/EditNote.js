import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditNote extends Component {
  render() {
    return (
      <div className="edit-note">
        <div className="edit-note-header">
          <h2>Edit Note:</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="edit-note-title">
            <input
            className="edit-note-title-input"
            id="noteTitle"
            type="text"
            label="Title"
            placeholder="Note Title"
            />
          </div>
          <div className="edit-note-content">
            <textarea
            className="edit-note-content-input"
            id="noteContent"
            type="text"
            label="Content"
            placeholder="Note Content"
            />
          </div>
          <button><Link to='/list'>Update</Link></button>
        </form>
      </div>
    )
  }
}

export default EditNote;