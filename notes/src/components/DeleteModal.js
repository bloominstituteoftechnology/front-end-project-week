import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteNote } from '../actions'
import { withRouter } from 'react-router-dom'


class DeleteModal extends Component {

  handleDelete = (event) => {
    console.log('click firing');
    this.props.deleteNote(this.props.match.params.id)
  }

  render() {
    return(
      <div className='delete-modal'>
        <div className='modal-overlay' onClick={this.props.handleModal}>
          <div className='confirmation-box'>
            <p>Are you sure you want to delete this?</p>
            <button onClick={this.handleDelete}>Delete</button>
            <button onClick={this.props.handleModal}>No</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state,
  }
}

export default withRouter(connect(mapStateToProps, { deleteNote })(DeleteModal))
