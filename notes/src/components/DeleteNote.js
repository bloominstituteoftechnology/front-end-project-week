import React, {Component} from 'react';
import axios from 'axios';
import './DeleteNote.css'

class DeleteNote extends Component {
    constructor(props) {
        super(props);
        console.log('props in DeleteNote', this.props)
        this.state = {
            notes: this.props.notes,
        }
        console.log(this.props.notes)
    }

    render() {
        return (
                <div className = "delete-note-container">
                <div className = 'delete-note'>
                    <h2> Are you sure you want to delete this?</h2>
                    <button onClick = {this.props.handleDeleteNote}> Yes </button>
                    <button onClick = {this.props.toggleDeleteNote}> No </button>
                </div>
                </div>
        )
    }
}

export default DeleteNote;