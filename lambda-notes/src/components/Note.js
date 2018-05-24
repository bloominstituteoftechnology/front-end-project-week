import React, { Component } from 'react';
import { Container, Row, Col, Modal, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import NoteButton from './NoteButton';
import { connect } from 'react-redux';
import { fetchNote, removeNote } from '../actions';
import ReactMarkdown from 'react-markdown';

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
        console.log(id)
        this.props.fetchNote(id);
        this.setState({deleted: this.props.deleted})
    }

    editNote = () => {
        this.setState({edit: true})
    }

    toggleModal = () => {
        this.setState({modal: !this.state.modal});
    }

    deleteNote = () => {
        const id = this.props.match.params.id
        console.log(id)
        this.props.removeNote(id)
    }

    render() { 
        return (
            this.props.singleNote ? (
                <Container fluid={true}>
                    <div className="edit-delete">
                        <Link to={`edit/${this.props.match.params.id}`}>edit</Link>
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
                                        <NoteButton color="danger" value="Delete" link="/"/>
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
                    {/* <h3 className="heading">{this.props.currentNote.title}</h3> */}
                    <Row className="single-note">
                        <Col sm="12" xl="9">
                            <h3 className="heading">{this.props.currentNote.title}</h3>
                        </Col>
                        <Col sm="12" xl="9">
                            <div  className="note-content">
                                <ReactMarkdown source={this.props.currentNote.content}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            ) : (
                null
            )
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentNote: state.currentNote,
        singleNote: state.singleNote,
        deleted: state.deleted
    }
}
 
export default connect(mapStateToProps, { fetchNote, removeNote })(Note);