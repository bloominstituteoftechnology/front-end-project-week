import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';

import '../Styles/DeleteModal.css';

const DeleteModal = (props) => {
    console.log("DELPROPS", props);
    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle}>
                <ModalBody>
                    <p>Are you sure you want to delete this?</p>
                    <Button className='deleteButton' onClick={() => props.delete(props.id)}>
                        Delete
                    </Button>
                    <Button className='dismissModal' onClick={() => props.toggle()}>
                        No
                    </Button>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default DeleteModal;
