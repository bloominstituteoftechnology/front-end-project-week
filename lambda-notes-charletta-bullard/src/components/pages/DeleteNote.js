import React, { Component } from 'react';
import { connect } from 'react-redux';

class DeleteNote extends Component {
  render() {
    return (
      <div className='delete-modal'>
        <div className='modaltext'>Are you sure you want to delete this?</div>
        <div>
          <button
            onClick={this.props.deleteNote}
            className='delete-note'
          >
            Delete
          </button>
          <button
            onClick={this.props.cancelDelete}
            className='cancel-delete'
          >
            No
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null)(DeleteNote);