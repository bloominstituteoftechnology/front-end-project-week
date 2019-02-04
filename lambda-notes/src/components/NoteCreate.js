import React, { Component } from 'react';
import './styles/NoteCreate.css';

class NoteCreate extends Component {
  render() {
    return (
      <div className="NoteCreateMain">
        <h1 className="NoteCreateTitle">Create New Note:</h1>
        <form className="NoteCreateForm">
            <input 
              className="NoteCreateInputTitle"
              placeholder="Note Title"
              />
            <textarea 
              className="NoteCreateTextAreaContent"
              placeholder="Note Content"
            />
            <button className="NoteCreateButtonSave" type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default NoteCreate;