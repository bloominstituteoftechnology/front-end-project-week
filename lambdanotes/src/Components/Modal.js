import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

import './Modal.css';

const baseUrl = 'https://heroku-backend-notes.herokuapp.com';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {}, 
            title: '',
            textBody: '',
        }
    }

    deleteNote = () => {  
        let id = this.props.id;
        axios 
            .delete(`${baseUrl}/notes/${id}`)
            .then(response => {
                this.props.getList();
                this.props.history.push(`/`);
            })
            .catch(error => console.log(error));
        this.props.hideModal();
    }; 

    render() {
        return (
            <div className="modal-overlay">
                <div className="modal">
                    <div className="modal-content">
                        <h4>Are you sure you want to delete this?</h4>
                        <button onClick={this.deleteNote} className="delete">Delete</button>
                        <button onClick={this.props.hideModal} className="No">No</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Modal;