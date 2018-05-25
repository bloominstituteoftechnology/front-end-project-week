import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

class deleteCard extends React.Component {
    constructor(props) {
    super(props);
    this.state= {
        modal: false
    };
    this.toggle =this.toggle.bind(this);
    }
toggle() {
    this.setState({
        modal: !this.state.modal
    });
}
render() {
    return (
        <div>
        <Button color="danger" onClick={this.toggle}>Delete{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            Are you sure you want to delete this?
          </ModalBody>
          <ModalFooter className= 'modalFooter'>
            <Button color="danger" onClick={this.toggle}>Yes</Button>{' '}
            <Button color="primary" onClick={this.toggle}>No</Button>
          </ModalFooter>
        </Modal>
            </div>
        
    );
}

}

export default deleteCard;