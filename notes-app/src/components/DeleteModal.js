import React, { Component } from 'react';

class DeleteModal extends Component {
  render() {
    if(!this.props.deleting === true) {
      return null
    }
    return (
      <div className='modal'>
        <p>Are you sure you want to delete?</p>
        <div className='modal-delete' onClick={this.props.deleteNote}>Delete</div>
        <div className='modal-cancel' onClick={this.props.toggleDelete}>Cancel</div>      
      </div>
    )
  }
}

export default DeleteModal;