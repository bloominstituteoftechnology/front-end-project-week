import React, { Component } from 'react';
import { addNewNote } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class NewNoteForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: ''
        };
    }

    updateInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    addNote = () => {
        const note = {
            title: this.state.title,
            content: this.state.content
        }
        this.props.addNewNote(note);
        this.setState({ title: '', content: '' });

    }

    render() {
        return (
            <form>
                <h3>Create New Note:</h3>
                <input 
                    type='text'
                    placeholder='Note Title'
                    name='title'
                    value={this.state.title}
                    onChange={this.updateInputChange} 
                />
                <input
                    type='text'
                    placeholder='Note Content'
                    name='content'
                    value={this.state.content}
                    onChange={this.updateInputChange}
                />
                <button onClick={this.addNote}>
                    <Link to='/'>
                        Save
                    </Link>
                </button>
            </form>
        )
    }
}

export default connect(null, { addNewNote })(NewNoteForm);