import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './UpdateNote.css';

class UpdateNote extends Component {

  handleUpdate(event) {
    console.log('noteID', this.props.note.id)
    console.log('in handle update')
    event.preventDefault();
    this.props.updateNote(this.props.note.id);
    this.props.history.push('/');
    console.log('exiting handle update')
  }

  render() {
    return (
      <div className="UpdateNote">
        <h3>Edit Note:</h3>
        <form className="update-form" onSubmit={this.handleUpdate.bind(this)}>
        <input type="text" placeholder="Note Title" value={this.props.title} onChange={this.props.newTitle}/>
        <input type="text" placeholder="Note Content" value={this.props.content} onChange={this.props.newContent}/>
        <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default withRouter(UpdateNote);