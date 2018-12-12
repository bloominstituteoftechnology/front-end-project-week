import React, { Component } from 'react';
import axios from 'axios';
import DeleteModal from './deleteModal';
import EditNote from './editNote';
import './NoteView.css';


const url = process.env.REACT_APP_DB_URL;

class Note extends Component {

    constructor(props) {
        super(props);
        this.state = {
            note: null,
            noteEditor: false,
            editTitle: '',
            editTextBody: '',
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    fetchNote = id => {
        const token = localStorage.getItem('bit_token');
        const options = {
            headers: {
                authorization: token,
            },
        };
        if (token) {
            axios
                .get(`${url}/note/get/${id}`, options)
                .then(response => {
                    this.setState(() => ({ note: response.data }))
                })
                .then(() => {
                    this.setState({ editTextBody: this.state.note.textBody, editTitle: this.state.note.title })
                })
                .catch(error => {
                    console.log(error);
                });
        } else { this.props.history('/') }
    };

    deleteNote = event => {
        event.preventDefault();
        const token = localStorage.getItem('bit_token');
        const options = {
            headers: {
                authorization: token,
            },
        };
        if (token) {
            axios
                .delete(`${url}/note/delete/${this.state.note.id}`, options)
                .then(response => {
                    this.props.changeState(response.data)
                })
                .catch(err => {
                    console.log(err)
                });
            this.props.history.push('/')
        } else {
            this.props.history.push('/')
        }
    };

    openEditForm = () => {
        this.setState({ noteEditor: !this.state.noteEditor });
    };

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.id !== newProps.match.params.id) {
            this.fetchNote(newProps.match.params.id);
        }
    }

    saveEdits = event => {
        event.preventDefault();
        const saveEditNotes = {
            title: this.state.editTitle,
            textBody: this.state.editTextBody
        }
        const token = localStorage.getItem('bit_token');
        const options = {
            headers: {
                authorization: token,
            },
        };
        axios
            .put(`${url}/note/edit/${this.state.note.id}`, saveEditNotes, options)
            .then(response => {
                this.setState({
                    note: response.data
                })
            })
            .then(response => {
                this.props.changeState(this.state.note);
            })
            .catch(err =>
                console.log(err));
        this.setState({
            editTitle: '',
            editTextBody: '',
        })
        this.openEditForm();
    }


    editHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        console.log(this.state);
        if (!this.state.note) {
            return <div className='loading-note'> Loading Note...</div>
        }
        return (
            <div className='single-note-view'>
                <div className='edit-delete'>
                    <p onClick={this.openEditForm}>edit </p>
                    <DeleteModal deleteNote={this.deleteNote} />
                </div>
                <div className='note-title-body'>
                    {this.state.noteEditor
                        ? (<EditNote notes={this.state.note}
                            saveEdits={this.saveEdits}
                            editHandler={this.editHandler}
                            editTextBody={this.state.editTextBody}
                            editTitle={this.state.editTitle} />)
                        : (<h1>{this.state.note.title}
                        </h1>)}
                    {this.state.noteEditor ? null :
                        <p> {this.state.note.textBody}</p>}
                </div>
            </div>
        )
    }
}

export default Note;