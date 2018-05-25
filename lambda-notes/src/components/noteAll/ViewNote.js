import React, { Component } from 'react'; 
// import { Router, Link } from 'react-router-dom';
import { withRouter, Link } from 'react-router-dom';
import { Form, Input, Row, Col, Button, Modal, ModalBody } from 'reactstrap';

class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }
    
    handleDelete = () => {
        this.toggleModal();
        this.props.deleteNote(this.props.selectedNote.title);
        this.props.history.push('/');
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col className='col-3 ml-auto'>
                        <Link to='/edit-note'>
                            <Button className='mr-2' size='sm'>
                            Edit
                            </Button>
                        </Link>
                        <Button onClick={ () => 
                        this.toggleModal()} size='sm'>
                        Delete 
                        </Button>
                        {this.state.modal ? <Modal isOpen={this.state.modal}>
                        <ModalBody>
                            Are you sure you want to delete?
                            <Link to='/' onClick={() => this.handleDelete()}>
                            <Button className='delete'>Delete</Button>
                            </Link>
                            <Button className='modeButton_no' onClick={() => this.toggleModal()}>
                            Cancel
                            </Button>
                            </ModalBody>
                            </Modal> : null}
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col>
                        <h3>{this.props.selectedNote.title}</h3>
<br />
                        <p>{this.props.selectedNote.content}</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(ViewNote);
