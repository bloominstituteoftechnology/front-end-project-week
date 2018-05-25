import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './NoteContainer';

class Delete extends Component {
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
        <h6 className="Delete" onClick={this.toggle}>Delete</h6>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          
          <ModalBody>
            Are you sure you want to delete this? 
          </ModalBody>
          <ModalFooter>
            <Button className="DeleteButton" color="danger" onClick={this.toggle}>Delete</Button>{' '}
            <Button className="NoButton" color="info" onClick={this.toggle}>No</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Delete;