import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import { removeNote } from '../actions';

class Note extends Component {
    constructor(props) {
        super(props)
            this.state = {
            notes: [],
            modalActive: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle(e) {
        e.preventDefault();
        this.setState({ modalActive: !this.state.modalActive })
    }

    matchedNote = this.props.notes.filter(note => {
        return note.id == this.props.match.params.id
    })[0];

    handleRemoveNote = (event, id) => {
        event.preventDefault();
        this.props.removeNote(id)
        window.location.href = "/";
    };

    render() {
        console.log(this.props.notes)
        console.log(this.matchedNote)
        return (
            <div className="note-view">
                <div className="button-group">
                    <Link to={`/editNote/${this.matchedNote.id}`} className="edit-button">
                        <button>Edit</button>
                    </Link>
                    <button
                        className="remove-button"
                        onClick={this.toggle}
                        >Remove Note
                    </button>
                </div>
                <div>
                    <h4 className="note-title">{this.matchedNote.title}</h4>
                    <p className="note-body">{this.matchedNote.body}</p>
                </div>
                <Modal isOpen={this.state.modalActive} toggle={this.toggle} className="modal-style">
                    <ModalBody className="modal-body">
                        Are you sure you want to delete this?
                    </ModalBody>
                    <ModalFooter className="but-wrapper">
                        <button color="danger" className="modal-but" onClick={event => {
                            this.handleRemoveNote(event, this.matchedNote.id);
                        }}>
                            Delete
                        </button> 
                        <button className="no-button modal-but" onClick={this.toggle}>
                            No
                        </button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        notes: store
    };
};

export default connect(mapStateToProps, { removeNote })(Note);