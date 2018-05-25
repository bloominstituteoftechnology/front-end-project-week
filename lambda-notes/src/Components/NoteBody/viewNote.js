//IMPORTS
import React, { Component } from 'react';
// import {Route, Link} from 'react-router-dom';
import { withRouter, Link } from 'react-router-dom';
import { Row, Col, Button, Modal, ModalBody } from 'reactstrap';

//VIEW NOTE COMPONENT
class ViewNote extends Component {
        state = {
        modal: false
    };


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
                            Are you sure you want to delete this?
                        </ModalBody>
                        <div className='d-flex justify-content-around align-items-center w-100'>
                            <Link className='col-x' to='/' onClick={() => this.handleDelete()}>
                            <Button className='delete'>Delete</Button>
                            </Link>
                            <Button className='modeButton_no col-4 w-100' onClick={() => this.toggleModal()}>No</Button>
                        </div>
                        </Modal> : null}    
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col>
                        <h3 className='font-weight-bold h3-notename'>{this.props.selectedNote.title}</h3><br />
                        <p>{this.props.selectedNote.content}</p>
                    </Col>
                </Row>
            </div>
        );
    }
}


export default withRouter(ViewNote);



