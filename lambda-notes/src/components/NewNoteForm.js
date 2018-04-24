import React, { Component } from 'react';
import PageNavigator from './PageNavigator';
import './NewNoteForm.css';

class NewNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    render() {
        return (
            <div className="new-note-container">
                <div className="new-note-wrapper">
                    <h3 className="new-note-header"> Create New Note:</h3>
                    <input name="title" className="title-input" placeholder="Note Title" />
                    <textarea name="body" placeholder="Note Content"  className="body-text-area" />
                    <button className="save-button">Save</button>
                </div>
            </div>
        );
    }
}

export default NewNoteForm;