import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditNote extends Component {
  render() {
    return (
      <div className="edit-note">
        <div className="edit-note-header">
          <h2>Edit Note:</h2>
        </div>
        <div className="edit-note-title">
          <form>
            <input
            className="edit-note-title-input"
            id="noteTitle"
            type="text"
            label="Title"
            placeholder="Note Title"
            />
          </form>
        </div>
        <div className="edit-note-content">
          <form>
            <textarea
            className="edit-note-content-input"
            id="noteContent"
            type="text"
            label="Content"
            placeholder="Note Content"
            />
          </form>
        </div>
        <button><Link to='/list'>Update</Link></button><br/>
      </div>
    )
  }
}

export default EditNote;