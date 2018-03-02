import React, { Component } from 'react';

class AddNote extends Component {
  render() {
    return (
      <div className='right-column'>
        <h2>Create New Note:</h2>
        <input className="note-title" type="text" />
        <textarea className="note-content">Note Content</textarea>
        <button className="submit-button">Save</button>
      </div>
    );
  }
}

export default AddNote;
