import React from 'react';
import { Button, Modal, ModalBody, Row } from 'reactstrap';

const DeleteModal = ({ modal, toggle, del }) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalBody>
        Are you sure you want to delete this?
      </ModalBody>
      <Row>
        <Button color="danger" onClick={del}>Delete</Button>{' '}
        <Button color="info" onClick={toggle}>No</Button>
      </Row>
    </Modal>
  );
}

export default DeleteModal;
