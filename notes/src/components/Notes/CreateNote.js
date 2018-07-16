import React, { Component } from 'react';
import './NoteContainer.css'

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="note-ctn">
                <h2>Create Note:</h2>
            </div>)
    }
}

export default CreateNote;