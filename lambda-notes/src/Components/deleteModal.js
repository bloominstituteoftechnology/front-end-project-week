import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class DeleteModal extends React.Component {
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
        <a href="#" onClick={this.toggle} style={{ color: '#4A4A4A', paddingLeft: "10px"}}>delete</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          
          <h4>Are you sure you want to delete this?</h4>
          <ModalFooter>

            <Button color="danger" onClick={this.toggle}>Delete</Button>{' '}
            <Button color="primary" onClick={this.toggle}>No</Button>
            </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteModal;