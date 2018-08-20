import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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

    render() {
        if(this.props.notes.length > 0) {
        return (
            <div>
                <div className="singleNoteView">
                    <div className="singleLinks">
                        <Link to={`/notes/${this.props.match.params.id}/edit`}>edit</Link>
                        &nbsp;<Button color="link" onClick={this.modalToggle}>delete</Button>
                        <Modal isOpen={this.state.modal} toggle={this.modalToggle} className={this.props.className}>
                            <ModalHeader toggle={this.modalToggle}></ModalHeader>
                            <ModalBody>Are you sure you want to delete this?</ModalBody>
                            <ModalFooter>
                                <Button color="danger" onClick={() => this.props.delete(this.props.match.params.id)}>Delete</Button>
                                <Button color="info" onClick={this.modalToggle}>No</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <h2 className="singleNoteTitle">{this.props.notes[this.props.match.params.id].title}</h2>
                    <p className="singleNoteText">{this.props.notes[this.props.match.params.id].textBody}</p>
                </div>
            </div>
        )
    } else return (<div>Loading...</div>)
    }
}

export default SingleNoteView;