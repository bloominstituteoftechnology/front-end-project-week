import React, { Component } from "react";
import axios from "axios";
import Form from "../Form";
import Modal from "react-modal";
import "./styles.css";

const url = `https://fe-notes.herokuapp.com/note`

class Note extends Component {
    state = {
        isEditing: false,
        note: null,
        title: "",
        textBody: ""
    };

    // LOGIC FOR EXTRACTING THE ID OF THE NOTE
    get id() {
        return this.props.match.params.id;
    }

    // LOGIC FOR RENDERING SINGLE NOTE
    componentDidMount() {
        axios
            .get(`${url}/get/${this.id}`)
            .then(response => {
                this.setState({
                    note: response.data,
                    title: response.data.title,
                    textBody: response.data.textBody 
                })
            })
            .catch(error => 
                console.log(error)
            );
    }

    recognizeInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // LOGIC FOR HANDLING NOTE EDITING 
    recognizeEditSubmit = (event) => {
        event.preventDefault();
        const editedNote = {
            title: this.state.title,
            textBody: this.state.textBody
        };
        axios 
            .put(`${url}/edit/${this.id}`, editedNote)
            .then(response => {
                this.setState({
                    isEditing: false,
                    note: response.data,
                    title: response.data.title,
                    textBody: response.data.textBody
                })
            })
            .catch(error => 
                console.log(error )
            );
    }

    toggleEditMode = (event) => {
        event.preventDefault();
        this.setState({
            isEditing: true
        });
    }

    openModal = (event) => {
        event.preventDefault();
        this.setState({ 
            modalIsOpen: true
        });
    }

    closeModal = () =>  {
        this.setState({
            modalIsOpen: false
        })
    }

    // LOGIC FOR DELETING A NOTE
    recognizeDelete = (event) => {
        event.preventDefault();

        axios
            .delete(`${url}/delete/${this.id}`)
            .then(response => {
                this.props.getNotes();
                this.setState({
                    isEditing: false,
                    note: null,
                    title: "",
                    textBody: ""
                })
            })
            .catch(error => 
                console.log(error)
            )
    };

    render() {
        if (this.state.isEditing) {
            return (
                <Form
                    type={"edit"}
                    title={this.state.title}
                    textBody={this.state.textBody}
                    recognizeFormSubmit={this.recognizeEditSubmit}
                    recognizeInputChange={this.recognizeInputChange}
                />
            );
        }

        return (
            <div className="single-note-view">
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            className="modal"
                            overlayClassName="overlay"
                        >
                            <h4 className="warning-text">
                                Are you sure you want to delete this?
                            </h4>
                            <div className="modal-buttons">
                                <button onClick={this.recognizeDelete}>Delete</button>
                                <button onClick={this.closeModal}>No</button>
                            </div>
                        </Modal>

                <div className="action-container">
                    <h5 
                        className="changes"
                        onClick={this.toggleEditMode}
                    >
                        edit
                    </h5>
                    <h5 
                        className="changes"
                        onClick={this.openModal}
                    >
                        delete
                    </h5>
                </div>
                <h2 className="single-note-header">
                    {this.state.title}
                </h2>
                <div className="note-textBody">
                    {this.state.textBody}
                </div>
            </div>
        )
    }
}

export default Note;