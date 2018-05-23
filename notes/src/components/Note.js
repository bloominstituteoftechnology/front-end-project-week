import React, { Component } from 'react';
import { Container, Row, Col, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import NewNote from './NewNote';
import NoteButton from './NoteButton';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            title: '',
            content: '',
            edit: false,
            deleted: false,
            modal: true
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    fetchNote = (id) => {}
    

    fetchNote = (id) => {}

    editNote = () => {
        this.setState({edit: true})
    }

    toggleModal = () => {
        this.setState({modal: !this.state.modal});
    }

    deleteNote = () => {} 

    render() { 
        return (
            this.state.deleted ? (
                <Redirect to="/"/>
            ) : (
                this.state.edit ? (
                    <NewNote 
                        edit={true} 
                        note={this.state.note} 
                        title={this.state.title}
                        content={this.state.content}/>
                ) : (
                    <Container>
                        <div className="edit-delete">
                            <a onClick={this.editNote}>edit</a>
                            <a onClick={this.toggleModal}>delete</a>
                            <Modal isOpen={this.state.modal}
                                toggle={this.toggleModal}
                                size="lg"
                                className="delete-modal">
                                <ModalBody>
                                    <p className="confirm">Are you sure you want to delete this?</p>
                                    <div className="btn-container">
                                        <div 
                                            onClick={this.deleteNote} 
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
                        <h3 className="heading">{this.state.title}</h3>
                        <Row>
                            <Col sm="12">
                                <div  className="note-content">
                                    {this.state.content}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                )
            )
        )
    }
}
 
export default Note;