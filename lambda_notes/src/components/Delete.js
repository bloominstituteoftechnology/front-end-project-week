import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';

class DeleteModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    style = {
        textDecoration: 'underline',
        cursor: 'pointer',
        display: 'inline-block',
        marginLeft: 'auto'
    }

    render() {
        return (
            <div>
                <div onClick={this.toggle} style={this.style}>delete</div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader>
                        Are you sure you want to delete this?
                    </ModalHeader>
                    <ModalFooter>
                        <Button color="danger" onClick={this.toggle}>Delete</Button>{' '}
                        <Button color="info" onClick={this.toggle}>No</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default DeleteModal;