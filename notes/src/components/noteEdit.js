import React, { Component } from 'react';
import axios from "axios";
import "../css/note.css"


class NoteEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            tags: '',
            title: '',
            textBody: '',
            id: '',
            select: null,
        };
    }


    componentDidMount() {
        const URL = 'https://fe-notes.herokuapp.com/note/get/' + this.props.id;
        axios
            .get(URL)
            .then(response => {
                this.setState(() => ({ notes: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    noteUpdate = (e) => {
        e.preventDefault();
        const URL = 'https://fe-notes.herokuapp.com/note/edit/' + this.props.id;
        axios
            .put(URL, {
                tags: this.props.tags,
                title: this.props.title,
                textBody: this.props.textBody,
            })
            .then(response => {
                this.setState(() => ({ notes: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    render() {
        return (
            <form className="note-edit-form" onSubmit={this.noteUpdate}>
                <header className="note-create-header">Edit Note:</header>
                <input
                    type="text"
                    className="note-title-input"
                    placeholder={this.state.notes.title}
                    value={this.props.value}
                    onChange={this.props.changeHandler}
                    name="title" />
                <textarea
                    type="text"
                    placeholder={this.state.notes.textBody}
                    className="note-textarea"
                    value={this.props.value}
                    onChange={this.props.changeHandler}
                    name="textBody" />
                <button
                    className="update-button"
                    onSubmit={this.noteUpdate}>
                    Update
            </button>
            </form>
        );
    };
}
export default NoteEdit;