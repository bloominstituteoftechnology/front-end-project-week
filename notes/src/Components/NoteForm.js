import React, { Component } from 'react';
import axios from 'axios';
import './NoteForm.css';
import Menu from './Menu';

class NoteForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
            title: '',
            textBody: ''
        }
    }

    addNote = event => {
        event.preventDefault()
        const addedNote = {
            title: this.state.title,
            textBody: this.state.textBody
        }

        this.props.newNote(addedNote)

        this.setState({
            title: '',
            textBody: ''
        })
    }

    inputHandleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div class='form'>
                <Menu />
                <div class='note-form'>
                    <h2>
                        Create New Note:
                    </h2>
                    <input
                        class='new-note-title'
                        placeholder='Note Title'
                        name='title'
                        onChange={this.inputHandleChange}
                        value={this.state.title}
                    />
                    <input
                        class='note-content'
                        placeholder='Note Content'
                        name='textBody'
                        onChange={this.inputHandleChange}
                        value={this.state.textBody}
                    />
                    <div class='save-button' onClick={this.addNote}>
                        Save
                    </div>
                </div>
            </div>
        )
    }
}

export default NoteForm;