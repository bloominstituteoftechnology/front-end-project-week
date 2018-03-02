import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteAPI from './NoteAPI';

class NewNote extends Component {
  // onChange(event) {
  //   let updateAPI = this.state.notes.slice();
  //   updateAPI.push("new value");
  //   this.setState({arr:updateAPI})
  // }

  render() {
    return (
      <div className="new-note">
      <div className="new-note-header">
        <h2>Create New Note:</h2>
      </div>
      <div className="new-note-title">
        <form>
          <input
          className="new-note-title-input"
          id="noteTitle"
          type="text"
          label="Title"
          placeholder="Note Title"
          />
        </form>
      </div>
      <div className="new-note-content">
        <form>
          <textarea
          className="new-note-content-input"
          id="noteContent"
          type="text"
          label="Content"
          placeholder="Note Content"
          />
        </form>
      </div>
      <button><Link to='/list'>Save</Link></button><br/>
    </div>
    )
  }
}

export default NewNote;