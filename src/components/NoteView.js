import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { editNote, deleteNote } from '../actions'



//This component shall display a note from the database.
//NoteView shall have two buttons: "edit" & "delete"
//The buttons will trigger an aciton that will delete/edit the note.
class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNote: [],
            title: '',
            textBody: '',
        }
    }

    toggleModal = () => {
        const modal = document.querySelector('.deleteModal');
        switch (modal.style.display) {
            case "": modal.style.display = "flex";
                break;
            case "flex": modal.style.display = "";
                break;
            default: console.log("ERROR");
        }

    }

    deleteHandler = event => {
        event.preventDefault();
        const killNote = { id: this.props.match.params.id }
        this.props.deleteNote(killNote);
        window.history.back();     
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    routerLink = () => {
        return `/notes/edit/${this.props.match.params.id}`
    }

    componentDidMount() {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    currentNote: res.data
                })
            })
    }

    render() {
        return (
            <div>

                <div className="deleteModal">
                    <div className="modal-content">
                        <p>Are you sure you want to delete this?</p>
                        <div className="modal-buttons">
                            <button onClick={this.deleteHandler} id="modal-delete">Delete</button>
                            <button onClick={this.toggleModal} id="modal-cancel">Cancel</button>
                        </div>
                    </div>
                </div>

                <div className="viewnote">
                    <div className="button-box">
                        <Link id="edit" className="edit-link" to={`/note/${this.props.match.params.id}/edit`}>edit</Link>
                        <button onClick={this.toggleModal} id="delete">delete</button>
                    </div>

                    <div className="viewnote-content">
                        <h2>{this.state.currentNote.title}</h2>
                        <p>{this.state.currentNote.textBody}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { editNote, deleteNote })(NoteView);