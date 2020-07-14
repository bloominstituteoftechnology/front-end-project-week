import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
        float: 'right'
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
                        <Link to='/'>
                            <Button color="danger" onClick={() => this.props.deleteNote(this.props.id)}>Delete</Button>
                        </Link>
                        <Button color="info" onClick={this.toggle}>No</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default connect(null, {deleteNote})(DeleteModal);