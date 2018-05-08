import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import "../App.css";
import { getNote, deleteNote } from '../Actions';


class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getNote(id);
      }

    toggleModal = () => {
        this.setState({modal: !this.props.modal});
    }

    handleDelete = () => {
        this.props.deleteNote(this.props.note.id);
        this.setState({modal: !this.props.modal});
    }

    render() {
        return(
            <div className='ViewNote-container'>
            {this.props.note ? 
                <div>
                    <Link to={{pathname: `${this.props.note.id}/edit`, state: this.props.note}}>Edit</Link>
                    <div>
                        <Button color="danger" onClick={this.toggleModal}>Delete</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            Are you sure you want to delete?
                        </ModalBody>
                        <ModalFooter>
                            <Link exact to="/">
                                <Button color="primary" onClick={this.handleDelete}>Delete</Button>
                            </Link>
                            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                        </ModalFooter>
                        </Modal>
                    </div>
                    <h2 className='ViewNote-title'>{this.props.note.title}</h2>
                    <p className='ViewNote-content'>{this.props.note.content}</p>
                </div> : <h2>Loading Note</h2>}
            </div>
            )

    }
}

const mapStateToProps = (state) => {
    return ({
        notes: state.notes,
        note: state.note,
        // modal: state.modal
    })     
}

export default connect(mapStateToProps, { getNote, deleteNote })(ViewNote);