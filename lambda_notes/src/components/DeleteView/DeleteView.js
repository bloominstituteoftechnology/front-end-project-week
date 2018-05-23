import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import '../DeleteView/DeleteView.css';

class DeleteView extends React.Component {
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
        <div>
          <a href="#" 
            onClick={this.toggle} 
            className="atag"
            style={{
            textDecoration: 'underline', 
            color: 'black', 
            fontSize: '1.3rem'}}>Delete</a>
        </div>
        <Modal 
          isOpen={this.state.modal}
          toggle={this.toggle} 
          className={this.props.className}>
          <ModalBody className="modal-body">
            <p>
              Are you sure you want to delete this?
            </p>
            <p>
              <Button 
                style={{backgroundColor: '#D0021B', border: '1px solid #979797', fontSize: '1.4rem'}}
                className="CreateViewButton" 
                onClick={this.toggle}>Delete</Button>{' '}
              <Button 
                style={{backgroundColor: '#2BC1C4', border: '1px solid #979797', fontSize: '1.4rem'}}
                className="CreateViewButton" 
                onClick={this.toggle}>No</Button>
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default DeleteView;