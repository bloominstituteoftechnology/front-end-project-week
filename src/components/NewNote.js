import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../actions';
import '../styles/NewNote.css';

const URL = 'http://localhost:8000/api/notes/';

class NewNote extends Component {
    state = {
        title: '',
        body: '',
        // tags: '',
    }

    handeInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleCreateNote = URL => {
        // let tags = [];
        if(!this.state.title || !this.state.body) {
            return;
        }
        // else if (this.state.tags === '' || this.state.tags === ' ' || this.state.tags === [] || this.state.tags === [''] || this.state.tags === [' ']) {
        //     tags = [];
        // }
        // else if (this.state.tags.constructor === Array) {
        //     tags = this.state.tags;
        // }
        // else {
        //     tags = this.state.tags.split(',');
        // }
        const note = {
            title: this.state.title,
            content: this.state.body,
            // tags: tags,
        }
        this.props.createNote(URL, note);
    }

    render() {
        return(
            <div className='create-container'>
                <h1>Create New Note:</h1>
                <div className='note-form'>
                    <input name='title' className='title' placeholder='Note Title' value={this.state.title} onChange={this.handeInputChange} />
                    <textarea name='body' className='body' placeholder='Note Content' value={this.state.body} onChange={this.handeInputChange}></textarea>
                    <input name='tags' className='title' placeholder='Tags' value={this.state.tags} onChange={this.handeInputChange} />
                    <button className='save-btn' type='submit' onClick={() => this.handleCreateNote(URL)}>Save</button>
                </div>
            </div>
        )
    }
}

export default connect(null, { createNote })(NewNote);

