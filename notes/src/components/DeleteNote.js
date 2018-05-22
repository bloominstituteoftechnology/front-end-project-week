import React from 'react';
import { Button, Modal, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

class DeleteNote extends React.Component {
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
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
          <a className="modul-link" onClick={this.toggle}>  Delete</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalFooter className="delete-modul">
            <Link to="/">
              <Button className="modul-delete" style={{ backgroundColor: 'rgb(208, 2, 27)'}} onClick={this.toggle}>Delete</Button>{' '}
            </Link>
            <Button className="modul-cancel" color="primary" onClick={this.toggle}>No</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteNote;