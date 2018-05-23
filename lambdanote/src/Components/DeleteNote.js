import React, { Component } from 'react';
import { Button, Modal } from 'reactstrap';
import { Link } from 'react-router-dom';


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
        <button className="close" onClick={this.toggle}>delete</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <p>Are you sure you want to delete this?</p>
          <div className='modal-btn'>
          <Link to='/'>
            <Button style={{ backgroundColor: '#2BC1C4', color: 'white' }}>Delete</Button>
            </Link>
            <Button style={{ backgroundColor: 'red', color: 'white' }}onClick={this.toggle}>No</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default DeleteNote;