import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Row, Col, Modal, ModalBody, Button } from 'reactstrap';
import './Note.css';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }

        this.toggleModal=this.toggleModal.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal
        })
    }

    handleDelete() {
        this.props.deleteNote(this.props.note);
        this.props.history.push('/');
    }

    render() {
        return (
            <Container className="Content">
                <Row>
                    <Col xs="9"/>
                    <Col xs="2" className="Options">
                        <Link to={`/edit/${this.props.note.id}`}>
                        <p className='Options__link'>edit</p>
                        </Link>
                        <p className='Options__link'
                        onClick={this.toggleModal}>
                        delete</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Modal isOpen={this.state.modal} toggle={this.toggleModal}
                        className={this.props.className}>
                            <ModalBody>
                                <h4>Are you sure you want to delete this?</h4>
                                <Button className="Button DeleteModal__delete-button" color="deoco" onClick={() => this.handleDelete()}>
                                    Delete</Button>{' '}
                                <Button className="Button DeleteModal__no-button" color="deoco" onClick={this.toggleModal}>No</Button>
                            </ModalBody>
                        </Modal>
                    </Col>
                </Row>
                <Row className='Content__heading Note__heading'>
                    <Col className='Content__heading__col Note__heading__col'>
                        <h4>{this.props.note.title}</h4>
                    </Col>
                </Row>
                <Row className='Note__text'>
                    <Col>
                        <p>{this.props.note.text}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default withRouter(Note);