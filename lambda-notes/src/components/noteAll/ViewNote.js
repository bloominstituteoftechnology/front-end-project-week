import React, { Component } from 'react'; 
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
                        <Link to='/edit-note'><Button className='mr-2' size='sm'>Edit</Button></Link>
                            <Button onClick={ () => this.toggleModal()} size='sm'>Delete</Button>
                            {this.state.modal ? <Modal isOpen={this.state.modal}>
                            <ModalBody>
                                Delete?
                                <Link to='/' onClick={() => this.handleDelete()}>
                                    <Button className='modeButton_no' onClick={() => this.toggleModal()}>
                                    Cancel
                                    </Button>
                            <ModalBody/>
                            <Modal/> : null
                    </Col>
                </Row>
            </div>
                <Row className='mt-4'>
                </Row>
export default withRouter(ViewNote);

                    /* <Link className='modalLink mr-3 font-weight-bold' to='/EditNote'>Edit</Link>
                        <button type='button' onClick={this.toggle} className='modalLink font-weight-bold'>Delete</button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                <ModalBody className='row d-flex flex-row justify-content-center flex-wrap'>
                                    <p className='modeTitle col-12'>Are you sure you want to delete this?</p>
                                
                                        <Link to='/' className='deleteLink col-5'>
                                        <button className='modeButton' onClick={this.toggle}>Delete</button>
                                        </Link>
                                
                                        <Link to='/ViewNote' className='deleteLink col-5'>
                                        <button className='modeButton_no' onClick={this.toggle}>No</button>
                                        </Link>
                                </ModalBody>
                            </Modal>
                        </div>
                        <h2 className='font-weight-bold sub_header'>Note Name</h2>
                        <p className='mt-4'>Content</p>
                    </div>
                </Route>
        )
    }
} */