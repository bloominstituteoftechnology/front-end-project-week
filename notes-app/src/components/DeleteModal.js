import React, { Component } from 'react';

class DeleteModal extends Component {
  render() {
    if(!this.props.deleting) {
      return null
    }

    return (
      <div className='modal'>
        <div >Delete</div>
        <div >Cancel</div>      
      </div>
    )
  }
}

export default DeleteModal;