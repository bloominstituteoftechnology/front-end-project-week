import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import '../styling/noteview.css';

class Delete extends React.Component {
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
        <h4 className= 'deletebut' color="danger" onClick={this.toggle}>{this.props.buttonLabel}Delete</h4>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className= 'deletemodal'>
          <ModalHeader toggle={this.toggle}>Are you sure you want to delete this?</ModalHeader>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Delete</Button>{' '}
            <Button color="primary" onClick={this.toggle}>No</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Delete;