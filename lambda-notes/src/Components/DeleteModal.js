import React, { Component } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import axios from 'axios';

import '../css/DeleteModal.css';

const DeleteModal = (props) => {
console.log('PROPS', props.note._id)
    let deleteThisNote = () => {

        axios
            .delete(`https://lambda-notes-back-end.herokuapp.com/notes/delete/${props.note._id}`)
            .then(res => {
                axios
            .get('https://lambda-notes-back-end.herokuapp.com/notes')
            .then(res => {
                const notes = res.data;
                // this.setState({ notes })
            })
            })
        // this.props.addNote(newNote);
        // this.setState({ title: '', content: '' });
    }
    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle}>
                <ModalBody>
                    <p>Are you sure you want to delete this?</p>
                    <Button className='deleteButton' onClick={deleteThisNote()}>
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
