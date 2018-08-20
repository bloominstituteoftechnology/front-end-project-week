import React, { Component } from "react";
import PropTypes from "prop-types";

class CreateNote extends Component {
  render() {
    return (
      <div className="notesViewContainer">
        <div className="viewTitle">{this.props.mode === 'ADD' ? 'Create New': 'Edit'} Note:</div>
        <form className='formLayout'id="createNoteForm" onSubmit={this.props.addNote}>
          <input type="text" className='notesubmit' placeholder="Note Title" />
          <textarea className='notesubmit'  form="createNoteForm" placeholder="Note Content" />
          <button className='sidebarButton'>{this.props.mode === 'ADD' ? 'Save': 'Update'}</button>
        </form>
      </div>
    );
  }
}

CreateNote.propTypes = {};

export default CreateNote;
