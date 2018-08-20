import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchNote, deleteNote, updateNote } from '../actions';
import Note from './Note';
import EditNote from './EditNote';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class SingleNote extends Component {
    constructor(props){
        super(props);
        this.state = {
            updateActive: false,
            modal: false
        }
    }
    componentDidMount(){
        this.props.fetchNote(this.props.match.params.id);
    }

    toggleUpdate = () => {
        this.setState((prevState) => { 
            return {updateActive: !prevState.updateActive}
        });
    }

    toggleModal = () => {
        this.setState((prevState) => {
            return {modal: !prevState.modal};
        });
    }

    deleteNote = () => {
        this.props.deleteNote(this.props.match.params.id, this.props.history)
    }

    render() {
        if (!this.props.fetchedNote){
            return(<div></div>)
        }
        return (
            <div>
                <Note title={this.props.note.title} content={this.props.note.textBody} />
                <Button onClick={this.toggleUpdate} color="primary">Update</Button>
                <Button onClick={this.toggleModal} color="danger">Delete</Button>
                {this.state.updateActive !== false
                    ? <EditNote onCancel={this.toggleUpdate} title={this.props.note.title} content={this.props.note.textBody} updateNote={this.props.updateNote} id={this.props.match.params.id} />
                    : null
                }
                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Are you sure you want to delete this note?</ModalHeader>
                    <ModalBody>
                        <Button color="danger" onClick={this.deleteNote}>Delete</Button>{' '}
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchingNote: state.fetchingNotes,
        fetchedNote: state.fetchedNote,
        note: state.note,
        error: state.error
    }
}

export default withRouter(connect(mapStateToProps, { fetchNote, deleteNote, updateNote })(SingleNote))