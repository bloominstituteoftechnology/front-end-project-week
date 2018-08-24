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

    handleAddNote = e => {
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
                <h5 className="">Create New Note: </h5>
                <form className="note-form">
                    <div>
                        <input 
                        type="text"
                        name="title" 
                        value={this.state.newNotes}
                        placeholder="Note Title"
                        onChange={this.handleAddNote}
                        className="title-input" />
                    </div>
                    <div>
                        <textarea 
                        type="text"
                        name="content" 
                        value={this.state.newNotes}
                        placeholder="Note Content"
                        onChange={this.handleAddNote}
                        className="content-input" />
                    </div>
                    <div>
                        <button type="submit" className="save-button" onClick={this.submitNewNote.notes}>Save</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default CreateView;