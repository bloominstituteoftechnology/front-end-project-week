import React, { Component } from 'react';
import './CreateNote.css';

class CreateNote extends Component {
    constructor() {
        super();
        this.state = { 
            title: '',
            body: ''
         }
    }

    handleNoteInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    saveNewNote = () => {
        const newNote = {id: this.props.notes.length, title: this.state.title, body: this.state.body};
        const notes = this.props.notes;
        console.log('NOTES:', notes)
        notes.push(newNote);
        this.setState({
            title: '',
            body: ''
        })
    }

    render() { 
        return ( 
            <div className="new-note-container">
                <h2>Create New Note:</h2>
                <div className="new-note">
                    <input
                        className="note-title"
                        type="text"
                        onChange={this.handleNoteInput}
                        name="title"
                        value={this.state.title}
                        placeholder='Title'
                    />
                    <textarea
                        className="note-body"
                        type="text"
                        onChange={this.handleNoteInput}
                        name="body"
                        value={this.state.body}
                        placeholder='Type Notes Here!'
                    ></textarea>
                    <button onClick={this.saveNewNote} className="save-note">Save</button>
                </div>
            </div>
         )
    }
}
 
export default CreateNote;