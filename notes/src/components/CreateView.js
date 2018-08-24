import React, { Component } from 'react';

import './CreateView.css';

class CreateView extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            content: "",
            notes: [{ title: 'Test Note Lorem', content: 'Test Note Ipsum' }]
        }
    }

    addNewNote = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitNewNote = e => {
        e.preventDefault();
        const { notes } = this.state;
        const newNotes = { title: this.state.title, content: this.state.content }
        notes.push(this.state.newNotes);
        this.setState( {notes, newNotes: ""} );
    }


    render() {
        return (
            <div className="new-container">
                <h3>Create New Note: </h3>
                <form className="note-form">
                    <input 
                    name="title" 
                    value={this.state.newNotes}
                    type="text"
                    placeholder="Note Title"
                    onChange={this.addNewNote}
                    className="title-input" />
                    <input 
                    name="content" 
                    value={this.state.newNotes}
                    type="text"
                    placeholder="Note Content"
                    onChange={this.addNewNote}
                    className="content-input" />
                    <button type="submit" onClick={this.submitNewNote.notes}>Save</button>
                </form>
            </div>
        )
    }
}

export default CreateView;