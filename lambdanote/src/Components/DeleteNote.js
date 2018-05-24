import React, { Component } from 'react';
import { Modal } from 'reactstrap';
import { Link } from 'react-router-dom';
import './SingleNote.css';
import './Modal.css';


class DeleteNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <p className='delete-btn' onClick={this.toggle}>delete</p>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className='deleteNoteModal'>
          <p className='modal-text'>Are you sure you want to delete this?</p>
          <div className='modal-btn'>
          <Link to='/'>
            <button className='modal-delete-btn'>Delete</button>
          </Link>
            <button className='modal-no-btn' onClick={this.toggle}>No</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default DeleteNote;