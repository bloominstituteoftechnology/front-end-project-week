import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class DeleteNoteModal extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
        return null;
    }
    
    // Redirect to / if note is deleted true
    if(this.props.isDeleted) {
      console.log('here the problem')
        return <Redirect to="/notes"/>
    }

    return (
      <div className="backdrop">
        <div className="modal">
                {this.props.children}
          <div className="modal-footer">
            <button className="delete-button" onClick={this.props.onDelete}>
                Delete
            </button>
            <button className="cancel-button" onClick={this.props.onClose}>
                No
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteNoteModal;