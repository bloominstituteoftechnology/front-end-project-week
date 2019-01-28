import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  } 

  render() {
    return (
      <div>
        <Button className="mainContent__options--links" onClick={this.toggle}>delete</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.modal} >
            <ModalBody className={this.props.body} >
              Are you sure you want to delete this?
            </ModalBody>
            <ModalFooter className={this.props.footer} >
              <Button className={this.props.delete} onClick={() => this.props.removeNote()}>Delete</Button>{' '}
              <Button className={this.props.cancel} onClick={this.toggle}>No</Button>
            </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteModal;