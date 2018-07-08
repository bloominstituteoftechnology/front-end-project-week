import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import './Note.css';

class Note extends Component {
    constructor() {
        super();
        this.state = {
            note: null,
            modal: false
        }
    }

    componentWillMount() {
        const token = localStorage.getItem('jwt');
        const requestOptions = {
            headers: {
                Authorization: token
            }
        }

        axios.get(`https://lambda-notes0706.herokuapp.com/api/users/${localStorage.getItem('userId')}/notes/${this.props.match.params.noteId}`, requestOptions)
            .then(response => {
                this.setState({ note: response.data });
            })
            .catch(error => {
                console.log(`Error: ${error}`);
            })
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    }

    removeNote = (userId, noteId) => {
        const token = localStorage.getItem('jwt');
        const requestOptions = {
            headers: {
                Authorization: token
            }
        }

        axios.delete(`https://lambda-notes0706.herokuapp.com/api/users/${userId}/notes/${noteId}`, requestOptions)
            .then(response => {
                this.props.history.push(`/${localStorage.getItem('userId')}`);
            })
            .catch(error => {
                console.log(`Error: ${error}`);
            })
    }

    render() {
        if (!this.state.note) {
            return <div>Loading note information...</div>
        }
        const { title, text } = this.state.note;
        return (
            <div className='note'>
                <div className='noteButtons'>
                    <Link className='editLink' to={`/${localStorage.getItem('userId')}/notes/${this.props.match.params.noteId}/editnote`}><span>edit</span></Link>
                    <span onClick={this.toggle}>delete</span>
                </div>
                <h4>{title}</h4>
                <p>{text}</p>
                <Modal className='popup' isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalBody className='popupBody'>Are you sure you want to delete this?</ModalBody>
                    <ModalFooter className='popupFooter'>
                        <Link className='deleteLink' to={`/${localStorage.getItem('userId')}`}><Button className='deleteButton' color='danger' onClick={() => this.removeNote(localStorage.getItem('userId'), this.props.match.params.noteId)}>Delete</Button></Link>
                        <Button className='cancelButton' color='info' onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
};

export default withRouter(Note); 