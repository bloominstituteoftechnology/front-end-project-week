import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'reactstrap';
import axios from 'axios';

export default class DeleteNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = !this.toggle.bind(this);
    }

    toggle() {
        this.setState({ 
            modal: !this.state.modal
        });
    }

    handleDeleteNote = id => {
        axios
            .delete(
                `https://killer-notes.herokuapp.com/note/delete/${id}`
            )
            .then(
                res => { 
                    console.log(res);
                    window.location.reload();
                }
            )
            .catch(
                err => {console.log(err)}
            )}

    render() {
        return (
            <div>
                <div className='delete' onClick={this.toggle}>delete</div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className='delete-modal'>
                    <p className='delete-warning'>Are you sure you want to delete this?</p>
                    <div className='delete-modal-buttons'>
                        <div className='delete-button-section'>
                            <Link to='/'>
                                <button 
                                    onClick={() => this.handleDeleteNote(this.props.currentNoteID)}
                                    className='delete-button'>
                                    Delete
                                </button>
                            </Link>
                        </div>
                        <button className='cancel-button' onClick={this.toggle}>No</button>
                    </div>
                </Modal>
            </div>
        );
    }
}