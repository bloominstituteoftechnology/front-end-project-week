import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';
import './Note.css';
import { deleteNote } from '../actions';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {
                id: '',
                title: '',
                text: '',
            },
            modal: false,
        }

        this.toggleModal=this.toggleModal.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.setState({
            note: this.props.notes.find(note => {
                return note.id === parseInt(this.props.match.params.id, 10)}),
        })
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal
        })
    }

    handleDelete(id) {
        this.props.deleteNote(id);
        this.props.history.push('/');
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="10"/>
                    <Col className="Options">
                        <Link to={`/edit/${this.props.match.params.id}`}>
                        <p className='Options__link'>edit</p>
                        </Link>
                        <p className='Options__link'
                        onClick={this.toggleModal}>
                        delete</p>
                        <Modal isOpen={this.state.modal} toggle={this.toggleModal}
                        className={this.props.className}>
                            <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
                            <ModalBody>
                                Are you sure you want to delete this?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={() => this.handleDelete(this.state.note)}>
                                    Delete</Button>{' '}
                                <Button color="secondary" onClick={this.toggleModal}>No</Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                    
                </Row>
                <Row>
                    <Col className='Note__Title'>
                        {this.state.note.title}
                    </Col>
                </Row>
                <Row>
                    <Col className='Note__Text'>
                        {this.state.note.text}
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps, { deleteNote })(Note);