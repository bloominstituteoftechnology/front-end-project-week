import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Notes.css';

class NewNote extends Component {
    state = {
        title: '',
        text: ''
    };
    handleInput = e => {this.setState({ [e.target.name]: e.target.value });};

    handleAddNote = e => {
        e.preventDefault();
        const note = { title: this.state.title, textBody: this.state.text, tags:[] };
        this.props.addNote(note);
        this.props.history.push('/');
    };
    render(){
    return (
        <div className="newnote-container">
            <div className="p-top">
            <h2 className="new-header">Create New Note:</h2>
            <form onSubmit={this.handleAddNote}>
                <input className="title-bar" 
                placeholder="Note Title"
                onChange={this.handleInput}
                value={this.state.title}
                type="text"
                name="title"
                />
                <textarea className="note-contents" 
                placeholder="Note Content"
                onChange={this.handleInput}
                value={this.state.text}
                type="text" 
                name="text"/>
                </form>
                <button className="form-button">Save</button>
                </div>
            </div>
    )
}
}

export default connect(null, { actions })(NewNote);