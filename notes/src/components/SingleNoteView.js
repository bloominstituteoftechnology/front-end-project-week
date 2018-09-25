import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactMarkdown from 'react-markdown';

class SingleNoteView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        }
    }

    modalToggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    delete = (id) => {
        this.props.history.push('/');
        this.forceUpdate();
        this.props.delete(id);
    };

    render() {
        let foundNote = this.props.notes.find(note => note.id === Number(this.props.match.params.id));
        if(this.props.notes.length > 0) {
        return (
            <div>
                <div className="singleNoteView">
                    <div className="singleLinks">
                        <Button color="link" onClick={() => {this.props.history.push(`/notes/${foundNote.id}/edit`); this.forceUpdate();}}>edit</Button>
                        <Button color="link" onClick={() => {this.props.clone(foundNote)}}>clone</Button>
                        &nbsp;<Button color="link" onClick={this.modalToggle}>delete</Button>
                        <Modal isOpen={this.state.modal} toggle={this.modalToggle} className={this.props.className}>
                            <ModalHeader toggle={this.modalToggle}></ModalHeader>
                            <ModalBody>Are you sure you want to delete this?</ModalBody>
                            <ModalFooter>
                                <Button color="danger" onClick={() => this.delete(foundNote.id)}>Delete</Button>
                                <Button color="info" onClick={this.modalToggle}>No</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <h2 className="singleNoteTitle"><ReactMarkdown source={foundNote.title} /></h2>
                    <p className="singleNoteText"><ReactMarkdown source={foundNote.textBody} /></p>
                    <p className="singleNoteTags">Tags: {foundNote.tags}</p>
                </div>
            </div>
        )
    } else return (<div>Loading...</div>)
    }
}

export default SingleNoteView;