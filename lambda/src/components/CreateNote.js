import React, { Component } from 'react';
import './CreateNote.css';
import { notes } from './notes.js';

export default class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state={
          notes: [],
          note_name: "",
          note_content: ""
        };
}

componentDidMount() {
    this.setState({ notes: notes });
}

createNote = id => {
    const newNote = { 
                      note_name: this.state.note_name,
                      note_content: this.state.note_content
                    };
    console.log(this.state);
    this.state.notes.push(newNote);
    this.setState({  note_name: "", note_content: "" });
}

handleCreate = e => {
    this.setState({ [e.target.name]: e.target.value });
}

render() {
    console.log(this.state.note_content);
    return (
            <div className="container">
                <h3 className="headerNotes">Create New Note:</h3>
                <div className="inputFields">
                <div className="inputTitle">
                    <input
                        type="text"
                        className="createNoteTitle"
                        name="note_name"
                        value={this.state.note_name}
                        placeholder="Note Title"
                        onChange={this.handleCreate}
                    />
                </div>
                <div className="inputContent">
                    <textarea
                        type="text"
                        className="createNoteContent"
                        name="note_content"
                        value={this.state.note_content}
                        placeholder="Note Content" 
                        onChange={this.handleCreate} >
                    </textarea>
                </div>
                </div>
                <div>
                    <button className="saveButton" onClick={this.createNote}>Save</button>
                </div>
           </div>);
}
}