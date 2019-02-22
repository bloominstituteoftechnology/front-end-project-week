import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';

import './Notes.css';

const MyModal = styled(Modal)`
    width: 50%;
    margin: auto;
    border: 1px solid grey;
    background: white;
    margin-top: 20%;
`;

const MyModalBody = styled(ModalBody)`
    text-align: center;
    margin: 5%;
`;

const MyModalFooter = styled(ModalFooter)`
    display: flex;
    justify-content: center;
`;

const MyButton = styled(Button)`
    margin: 2.5%;
    margin-top: 0;
`;

// const URL = 'https://fe-notes.herokuapp.com/note';
const URL = 'https://morning-tundra-78343.herokuapp.com/note';

class OneNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: [],
            // title: '',
            // textBody: ''
            modal: false,
        };
    
    this.toggle = this.toggle.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        // not sure if this id will be id or _id! Boom! It's id becuase it's built into React (not the _id of the server).
        this.fetchNote(id);
    }

    fetchNote = (id) => {
        axios
            // .get(`${URL}/get/${id}`)
            .get(`${URL}/get/${id}`)
            .then(response => {
                console.log(response);
                console.log('id:', id);
                console.log('id type:', typeof(id));
                this.setState(() => ({ note: response.data }));
            })
            .catch(error => {
                console.error(error);
            });
    };

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    deleteHandler = () => {
        const id = this.props.match.params.id;
        axios
            // .delete(`${URL}/delete/${id}`)
            .delete(`${URL}/delete/${id}`)
            .then(response => {
                console.log(response);
                this.props.history.push('/');
            })
            .catch(error => {
                console.error(error);
            });
    };

    render() {
        const id = this.props.match.params.id;
        return (
                <div className="menu-container">
                    <div className="modal-div">
                        <MyModal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <MyModalBody>
                                Are you sure you want to delete this?
                            </MyModalBody>
                            <MyModalFooter>
                                <MyButton color="primary" className="red-button" onClick={this.deleteHandler}>Delete</MyButton>{' '}
                                <MyButton color="secondary" className="submit-button" onClick={this.toggle}>No</MyButton>
                            </MyModalFooter>
                        </MyModal>
                    </div>
                    <div className="link-container">
                        <Link to={`/edit/${id}`} className="link">
                            edit
                        </Link>
                        <p className="link" onClick={this.toggle} >
                            delete
                        </p>
                    </div>
                    <div className="note-view">
                        <h2 className="your-notes">{this.state.note.title}</h2>
                        <p>{this.state.note.textBody}</p>
                    </div>
                </div>
        );
    }
};

export default withRouter(OneNote);
