import React from 'react';
import { Button, Modal, ModalBody, Row } from 'reactstrap';

const DeleteModal = props => {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <ModalBody>
        Are you sure you want to delete this?
      </ModalBody>
      <Row>
        <Button color="danger" onClick={props.delete}>Delete</Button>{' '}
        <Button color="info" onClick={props.toggle}>No</Button>
      </Row>
    </Modal>
  );
}

export default DeleteModal;