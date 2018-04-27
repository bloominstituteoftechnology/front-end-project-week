import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom';

import './NoteCard.css';

class NoteDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            notes: [],
            id: 0,
            currentNote: {}
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidMount() {
        const newNotes = this.props.notes;
        console.log('Detail View', newNotes);
        const newId = Number(this.props.match.params.id);
        const newNote = newNotes.filter((note) => note.id === newId).pop();

        this.setState({notes: newNotes, id: newId, currentNote: newNote});
    }

    handleDetate = (e) => {
        this.props.onDelete(this.state.id);
    };
    render() {
        return (
            <div className='col-9 right__side'>
                <div className="row">
                    <div className="col-9 NoteDetail__menu">
                        <Link to={`/editNote/${this.state.currentNote.id}`}>Edit</Link>
                        <a href='#' onClick={this.toggle}>{this.props.buttonLabel}Delete</a>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalBody toggle={this.toggle}>
                                Are you want to delete this?
                            </ModalBody>
                            <ModalFooter>
                                <Link to={'/'}>
                                <Button color="primary" onClick={this.handleDetate}>Delete</Button>
                                </Link>
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <h1>
                            {this.state.currentNote.title}
                        </h1>
                    </div>
                    <div className='col-9'>
                        <p>
                            {this.state.currentNote.content}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteDetail;