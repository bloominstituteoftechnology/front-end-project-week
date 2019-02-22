import React from 'react';
import Modal from 'react-modal';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';

import './note.css';

class Note extends React.Component {
    state = {
        selectedNote: '',
        note: [],
        showModal: false
    }

    fetchNote = id => {
        axios
            .get(`https://jbrockbackendproject.herokuapp.com/notes/get/${id}`)
            .then(response => this.setState({ note: response.data[0] }))
            .catch(response => console.log(response));
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.fetchNote(id);
    }

    deleteNote = () => {
        const id = this.state.note.id
        axios
        .delete(`https://jbrockbackendproject.herokuapp.com/notes/delete/${id}`)
        .then(response => {
            this.setState({ notes: response.data });

        })
        .catch(error => console.log('error'));
    };

    openModal = () => {
        this.setState({ showModal: true });
    };

    closeModal = () => {
        this.setState({ showModal: false });
    };

    render() {
        const { id } = this.state.note


        return (
            <div>
                <div className='edit-delete'>
                    <div>
                        <NavLink to={`/edit/${id}`}>
                        <p className='edit'>edit</p>
                        </NavLink>
                    </div>
                    <div>
                        <p onClick={this.openModal}>delete</p>
                    </div>
                </div>
                <div className='note-full-body'>
                    <h2 className='home-title'>{this.state.note.title}</h2>
                    <p className='note-home-body' >{this.state.note.body}</p>
                </div>
                <Modal
                    className='modal'
                    isOpen={this.state.showModal}
                    onRequestClose={this.closeModal}
                    contentLabel='Are you sure you want to DELETE?'>

                    <div>
                        <p>Are you sure you want to delete this?</p>
                    </div>
                    <div className='modal-buttons'>
                        <Link className="noteLink" to="/">
                        <button 
                            className='delete-modal' 
                            onClick={this.deleteNote}>
                            Delete
                        </button>
                        </Link>
                        <button 
                            className='no-modal' 
                            onClick={this.closeModal}>
                            No
                        </button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Note;