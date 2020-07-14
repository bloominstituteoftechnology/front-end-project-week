import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../App.css';

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      note: "",
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <h4 className="delete" onClick={this.toggle}>{this.props.buttonLabel}Delete</h4>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
           Are you sure you want to delete this?
          </ModalBody>
          <ModalFooter>
           <Link to="/"> <Button color="danger" onClick={this.toggle}>Delete</Button>{' '}</Link>
            <Button color="info" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Delete;