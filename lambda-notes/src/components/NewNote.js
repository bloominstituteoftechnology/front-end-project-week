import React, { Component } from 'react';
import './NewNote.css';

class NewNote extends Component {
  render() {
    return (
        <div className="col-md-8">
        <h3>Create New Note</h3>
        <form>
          <input />
          <textarea />
          <button type="button" className="btn">Add Note</button>
        </form>
        </div>
    );
  }
}
export default NewNote;
