import React, { Component } from 'react';
import { Button, Modal } from 'reactstrap';
import { Link } from 'react-router-dom';
import './SingleNote.css';


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
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <p>Are you sure you want to delete this?</p>
          <div className='modal-btn'>
          <Link to='/'>
            <Button style={{ backgroundColor: 'red', color: 'white' }}>Delete</Button>
          </Link>
            <Button style={{ backgroundColor: '#2BC1C4', color: 'white' }}onClick={this.toggle}>No</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default DeleteNote;