import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import Button from '../Button';

class ModalLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  closeModal = () => {
    this.toggle();
  }
  render() { 
    return ( 
      <React.Fragment>
        <a href="#modal" onClick={this.toggle}>{this.props.title}</a>
        <Modal isOpen={this.state.modal} modalTransition={{ timeout: 20 }} backdropTransition={{ timeout: 10 }}
          toggle={this.toggle}>
          <ModalBody>
            {this.props.modalBody}
          </ModalBody>
          <ModalFooter className="modal-actions">
            <Button type="primary" title={this.props.primaryActionTitle} clickAction={this.props.primaryAction} />
            <Button type="secondary" title={this.props.secondaryActionTitle} clickAction={this.closeModal} />
          </ModalFooter>
        </Modal>
      </React.Fragment>
    )
  }
}
 
export default ModalLink;