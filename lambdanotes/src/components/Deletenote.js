import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

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
        <a color="danger" onClick={this.toggle}>{this.props.buttonLabel}delete</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className= 'deletemodal'>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Delete;