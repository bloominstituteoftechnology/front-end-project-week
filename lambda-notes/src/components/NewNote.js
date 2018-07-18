import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../actions';
import '../styles/NewNote.css';

const URL = 'https://killer-notes.herokuapp.com/note/';

class NewNote extends Component {
    state = {
        title: '',
        body: '',
    }

    handeInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleCreateNote = URL => {
        const note = {
            title: this.state.title,
            textBody: this.state.body,
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
                    <button className='save-btn' type='submit' onClick={() => this.handleCreateNote(URL)}>Save</button>
                </div>
            </div>
        )
    }
}

export default connect(null, { createNote })(NewNote);

