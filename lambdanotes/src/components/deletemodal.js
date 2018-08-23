import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
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
         <Button color="info" onClick={this.toggle}>DELETE</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            Are you sure you want to delete this note?
          </ModalBody>
          <ModalFooter>
            <Link to='/'><Button color="primary" onClick={(event) => {this.toggle(); this.props.deleteHandler(this.props.match.params.id); this.props.history.push('/'); event.preventDefault();}}>Delete</Button>{' '}</Link>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteModal;