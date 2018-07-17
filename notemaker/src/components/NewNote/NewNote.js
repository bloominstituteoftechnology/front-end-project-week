import React, { Component } from 'react';
import './NewNote.css';

class NewNote extends Component {

    constructor() {
        super();
        this.state = {
            notes: []
        }
    }    

    render() {
        return (
            <div className="new-note">
                <h3>Create New Note:</h3>
                <input className="note-title" placeholder="Note Title"></input>
                <br />
                <textarea className="note-content" placeholder="Note Content"></textarea>

                <div className="note-save-button">Save</div>
            </div>
        )
    }
}

export default NewNote;