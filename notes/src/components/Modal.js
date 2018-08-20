import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';

const DeleteModal = props => {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <ModalBody>
        Are you sure you want to delete this?
      </ModalBody>
      <Button color="danger" onClick={props.delete}>Delete</Button>{' '}
      <Button color="info" onClick={props.toggle}>No</Button>
    </Modal>
  );
}

export default DeleteModal;