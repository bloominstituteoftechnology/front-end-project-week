import React, { Component } from "react";
import axios from "axios";
import Form from "../Form";

export default class Note extends Component {
    state = {
        isEditing: false,
        note: null,
        title: "",
        textBody: ""
    };

    get id() {
    return this.props.match.params.id;   
    }

    componentDidMount() {
        console.log(this.props.match.params, "text")
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${this.id}`)
            .then(response => {
                this.setState({ 
                    note: response.data,
                    title: response.data.title,
                    textBody: response.data.textBody });
            })
            .catch(error => console.log(error));
    }

    handleInputChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value 
        });
    }

    handleEditSubmit = event => {
        event.preventDefault();
        
        const editedNote = {
            title: this.state.title,
            textBody: this.state.textBody
        };

        axios
            .put(`https://fe-notes.herokuapp.com/note/edit/${this.id}`, editedNote)
            .then(response => {
                this.props.refetchNotes();
                this.setState({
                    isEditing: false,
                    note: response.data,
                    title: response.data.title,
                    textBody: response.data.textBody
                });
            })
            .catch(error => console.log(error));
    }

    toggleEditMode = event => {
        event.preventDefault();
        this.setState({ isEditing: true });
    }

    handleDelete = event => {
        event.preventDefault();

        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${this.id}`)
            .then(response => {
                this.props.refetchNotes();
                this.setState({
                    isEditing: false,
                    note: null,
                    title: "",
                    textBody: ""
                });
            })
            .catch(error => console.log(error));

        this.props.history.push("/");
    }

render() {
        if (!this.state.note) {
            return (
                <div className="main-container note">Note is loading...</div>
            )
        }
        if (this.state.isEditing) {
            return (
                <Form 
                    type={"edit"}
                    title={this.state.title}
                    textBody={this.state.textBody}
                    handleFormSubmit={this.handleEditSubmit}
                    handleInputChange={this.handleInputChange}
                />
            );
        }

        return (
            <div className="main-container note">
                <div className="action-container">
                    <h5 onClick={this.toggleEditMode}>
                        edit
                    </h5>
                </div>
                <h2>
                    {this.state.title}
                </h2>
                <div className="note-body">
                    {this.state.textBody}
                </div>
            </div>
        )
    }
};