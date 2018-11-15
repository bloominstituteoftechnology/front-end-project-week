import React, { Component } from 'react';
import axios from 'axios';
import './NoteForm.css';
import Menu from './Menu';

class NoteForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            textBody: ''
        }
    }

    addNote = event => {

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
                    />
                    <input
                        class='note-content'
                        placeholder='Note Content'
                    />
                    <div class='save-button'>
                        Save
                    </div>
                </div>
            </div>
        )
    }
}

export default NoteForm;