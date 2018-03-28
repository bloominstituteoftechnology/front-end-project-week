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
            <h2>Create New Note:</h2>
          </label>
          <input 
          required
          className="input-title" 
          type="text" 
          placeholder="Enter title"
          onChange={this.props.newTitle}
          value={this.props.title}
          />
          <input 
          required
          className="input-body" 
          type="text" 
          placeholder="Enter note text"
          onChange={this.props.newContent}
          value={this.props.content}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateNote);