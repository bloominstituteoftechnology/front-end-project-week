import React, { Component } from 'react';
import { Container, Row, Col, Modal, ModalBody } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';
// import axios from 'axios';
import NewNote from './NewNote';
import NoteButton from './NoteButton';
import { connect } from 'react-redux';
import { fetchNote, removeNote } from '../actions';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            deleted: false,
            modal: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.fetchNote(id);
    }

    editNote = () => {
        this.setState({edit: true})
    }

    toggleModal = () => {
        this.setState({modal: !this.state.modal});
    }

    render() { 
        return (
            this.state.deleted ? (
                <Redirect to="/"/>
            ) : (
                <Container>
                    <div className="edit-delete">
                        <Link to={`edit/${this.props.currentNote.id}`}>edit</Link>
                        <a onClick={this.toggleModal}>delete</a>
                        <Modal isOpen={this.state.modal}
                            toggle={this.toggleModal}
                            size="lg"
                            className="delete-modal">
                            <ModalBody>
                                <p className="confirm">Are you sure you want to delete this?</p>
                                <div className="btn-container">
                                    <div 
                                        onClick={this.props.removeNote} 
                                        className="btn-holder">
                                        <NoteButton color="danger" value="Delete"/>
                                    </div>
                                    <div 
                                        onClick={this.toggleModal} 
                                        className="btn-holder">
                                        <NoteButton color="main" value="No"/>
                                    </div>
                                </div>
                            </ModalBody>
                        </Modal>
                    </div>
                    <h3 className="heading">{this.props.currentNote.title}</h3>
                    <Row>
                        <Col sm="12">
                            <div  className="note-content">
                                {this.props.currentNote.content}
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentNote: state.currentNote,
    }
}
 
export default connect(mapStateToProps, { fetchNote, removeNote })(Note);