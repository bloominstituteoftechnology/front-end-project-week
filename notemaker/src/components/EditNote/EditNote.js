import React, { Component } from 'react';
import './EditNote.css';

class EditNote extends Component {

    constructor() {
        super();
        this.state = {
            notes: []
        }
    }    

    saveHandler = (state) => {
        Object.assign({}, state, { note: document.getElementById("note-content") });
    }

    render() {
        return (
            <div className="new-note">
                <h3>Edit Note:</h3>
                <input className="note-title" placeholder="Note Title"></input>
                <br />
                <textarea className="note-content" placeholder="Note Content"></textarea>

                <div className="note-save-button">Save</div>
            </div>
        )
    }
}

export default EditNote;