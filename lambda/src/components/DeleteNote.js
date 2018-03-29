import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

class DeleteNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
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
    }

    render() {
        return (
            <div>
                <a className="Nav__item" onClick={this.toggle}>delete</a>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.className}>
                <ModalHeader toggle={this.toggle}>Are you sure you want to delete this?</ModalHeader>
                <ModalFooter>
                    <Button color="danger" onClick={this.handleDelete}>Delete</Button>
                    <Button className="Button flex" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default DeleteNote;