import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import './Note.css'

class NoteCard extends Component {
    constructor() {
        super();
        this.state = {
            modal: false
        }
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }

    render() {
        if (!this.props.note) {
            return <div>Loading note information...</div>
        }
        const { title, text } = this.props.note;
        return (
            <div className="noteCardContainer">
                <div className="noteCardButtons">
                    <Link className="editLink" to={`/EditNote/${this.props.id}`}><span>edit</span></Link>
                    <span onClick={this.toggle}>delete</span>
                </div>
                <h4>{title}</h4>
                <p>{text}</p>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="popup">
                    <ModalBody className="popupBody">Are you sure you want to delete this?</ModalBody>
                    <ModalFooter className="popupFooter">
                        <Link className="deleteLink" to="/"><Button className="deleteButton" color="danger" onClick={() => this.props.removeNote(this.props.id)}>Delete</Button></Link>
                        <Button className="cancelButton" color="info" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default NoteCard; 