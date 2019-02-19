import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../config';

const Modal = (props) => {
    return (
        <div className={props.display ? "modal display-block" : "modal display-none"}>
            <section className="modal-main">
                <section className="message">
                    <p>Are you sure you want to delete this?</p>
                </section>
                <section className="controls">
                    <button className="modal-submit" onClick={props.handleSubmit}>Delete</button>
                    <button className="modal-cancel" onClick={props.handleCancel}>No</button>
                </section>
            </section>
        </div>
    );
};

class Note extends React.Component {
    constructor(props) {
        super(props);

        this.note = {
            title: '',
            content: ''
        }

        this.state = {
            deleting: false,
            error: null,
            loading: false,
            note: this.note,
            modal: false
        }
    }

    deleteHandler = e => {
        this.props.history.push(`/delete/${this.state.note.id}`);
        this.setState({...this.state, modal: false, deleting: true});
        axios.delete(`${API_URL}/notes/${this.props.match.params.id}`)
            .then( response => {
                this.props.history.push(`/`);
            })
            .catch( err => {
                this.setState({error: "Unable to delete note on server", deleting: false});
            })
    }
  
    closeModal = () => {
        this.setState({...this.state, modal: false});
    };

    displayModal = e => {
        e.preventDefault();
        this.setState({...this.state, modal: true});
    };

    componentDidMount() {
        this.setState({...this.state, loading: true});
        axios.get(`${API_URL}/notes/${this.props.match.params.id}`)
            .then( response => {
                this.setState({error: null, loading: false, note: response.data});
            })
            .catch( err => {
                this.setState({error: "Unable to retrieve note from server", loading: false, note: this.note});
            })
    }

    render() {
        return (
            <div className="note">
                <Modal display={this.state.modal} handleCancel={this.closeModal} handleSubmit={this.deleteHandler}></Modal>
                <header>
                    <h2>{this.state.note.title}</h2>
                    <div className="options">
                        <Link to={`/edit/${this.state.note.id}`}>edit</Link>
                        <a href={`/delete/${this.state.note.id}`} onClick={this.displayModal}>delete</a>
                    </div>
                </header>
                { this.state.loading === true ? <h1>Loading...</h1> : null }
                { this.state.deleting === true ? <h1>Deleting...</h1> : null }
                { this.state.error !== null ? <h1>{this.state.error}</h1> : null }
                <p>{this.state.note.content}</p>
            </div>
        )
    }
}

export default Note;