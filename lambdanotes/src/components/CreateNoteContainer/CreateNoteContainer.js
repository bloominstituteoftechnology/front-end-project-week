import React, { Component } from 'react';

class CreateNoteContainer extends React.Component {
  render() {
    return (
      <div className="create-note-container">
        <p> Create New Note: </p>
        <form>
        <p><input className="noteTitleInputBox" type="text" placeholder="Note Title" /></p>
        <p><input className="noteInputInputBox" type="text" placeholder="Note Content" /></p>
        <p><button className="save-button" onClick={this.props.handleClickForSave}>Save</button></p>
        </form>
      </div>
    );
  }
};

export default CreateNoteContainer;
