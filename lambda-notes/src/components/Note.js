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
            modal: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.fetchNote(id);
    }

    toggleModal = () => {
        this.setState({modal: !this.state.modal});
    }

    deleteNote = () => {
        const id = this.props.match.params.id
        this.props.removeNote(id)
        setTimeout(() => {
            this.props.history.push("/");
        }, 10);
    }

    render() { 
        return (
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
                                <NoteButton color="danger" value="Delete" onClick={this.deleteNote}/>
                                <NoteButton color="main" value="No" onClick={this.toggleModal}/>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
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
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentNote: state.currentNote
    }
}
 
export default connect(mapStateToProps, { fetchNote, removeNote })(Note);