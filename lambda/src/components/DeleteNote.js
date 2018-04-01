import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import { Redirect } from 'react-router-dom';

class DeleteNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Redirect: false,
            modal: false,
            note: {}
        };

        this.toggle = this.toggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleDelete() {
        this.props.delete();
        //this.setState({ modal: false, Redirect: true })
    }

    render() {
        return (
            <div>
                <a className="Nav__item" onClick={this.toggle}>delete</a>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Are you sure you want to delete this?</ModalHeader>
                    <Button className="Button__delete" onClick={this.handleDelete}>Delete</Button>
                    <Button className="Button" onClick={this.toggle}>No</Button>
                </Modal>
            </div>     
        );
    }
}

{/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                        Are you sure you want to delete?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Delete</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>No</Button>
                    </ModalFooter>
                </Modal> */}

export default DeleteNote;