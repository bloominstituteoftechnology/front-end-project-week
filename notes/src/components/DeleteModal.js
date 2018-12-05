import React, { Component } from "react";
import { Button, Modal,ModalBody, ModalFooter } from "reactstrap";

class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: '',
      isModalOpen: false
    };

  

 

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  


  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
    
          <ModalBody>
            Are you sure you want to delete this?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>
              Delete
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              No
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  
}



export default DeleteModal;
