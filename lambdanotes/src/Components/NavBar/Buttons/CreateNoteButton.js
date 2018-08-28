import React, { Component } from 'react';
import './createNoteButton.css';

class CreateNoteButton extends Component {
    render() {
        return (
            <div>
                <button className="newButton">+ Create New Note</button>
            </div>
        );
    }
}

export default CreateNoteButton;