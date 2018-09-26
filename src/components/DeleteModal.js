import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class DeleteModal extends Component {
    constructor (props) {
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
    
    render () {
      return (
        <div>
          <Button color="link" onClick={this.toggle}>Delete</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>Are you sure you want to delete {this.props.title}?</ModalBody>
          <ModalFooter>
          <Button color="danger" onClick={this.props.delete}>Delete</Button>
          <Button color="primary" onClick={this.toggle}>Cancel</Button> 
          </ModalFooter>
          </Modal>
        </div>
      );
    }
  }

  export default DeleteModal;