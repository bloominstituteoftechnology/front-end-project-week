import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './CreateNote.css'

class CreateNote extends Component {
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.createNote(event);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="CreateNote">
        <form className="create-form" onSubmit={this.handleSubmit.bind(this)}>
          <label className="input-label">
            <h2 className="label-h2">Create New Note:</h2>
          </label>
          <input 
            required
            className="input-title" 
            type="text" 
            placeholder="Note Title"
            onChange={this.props.newTitle}
            value={this.props.title}
          />
          <textarea 
            required
            className="input-body" 
            type="textarea" 
            placeholder="Note Content"
            onChange={this.props.newContent}
            value={this.props.content}
          />
          <button className="sav-btn" type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateNote);