import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Modal from './Modal';
import './Note.css';

const baseUrl = 'https://heroku-backend-notes.herokuapp.com';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {},
            showModal: false,
        };
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        axios 
        .get(`${baseUrl}/notes/${id}`)
        .then(response => this.setState({ note: response.data }))
        .catch(error => console.log(error))
    }
    
    openModal = () => {
        this.setState({ showModal: true })
    }
    hideModal = () => {
        this.setState({ showModal: false })
    }

    render() {
        return (
            <div className="note-container">
                <div className="link-container">
                    <div className="edit">
                        <Link to={`/Edit/${this.props.match.params.id}`}>
                            edit
                        </Link>
                    </div>
                    <div onClick={this.openModal} className="delete">
                        delete
                    </div>
                </div>
                <div className="modal">
                {this.state.showModal ? <Modal id={this.state.note.id} hideModal={this.hideModal} getList={this.props.getList} /> : null}
                </div>
                <div className="body-container">
                    <h3>{this.state.note.title}</h3>
                    <p>{this.state.note.textBody}</p>
                </div>
            </div> 
        )
    };
};
export default Note;





