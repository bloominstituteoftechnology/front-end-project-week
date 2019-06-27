import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import './NoteForm.css';

class NoteForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
            title: '',
            body: ''
        }
    }

    addNote = event => {
        event.preventDefault()
        const addedNote = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.newNote(addedNote)

        this.setState({
            title: '',
            body: ''
        })
    }

    inputHandleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className='form'>
                <Menu />
                <div className='note-form'>
                    <h2>
                        Create New Note:
                    </h2>
                    <input
                        className='new-note-title'
                        placeholder='Note Title'
                        name='title'
                        onChange={this.inputHandleChange}
                        value={this.state.title}
                    />
                    <textarea
                        className='note-content'
                        placeholder='Note Content'
                        name='body'
                        onChange={this.inputHandleChange}
                        value={this.state.body}
                    />
                    <div className='save-button' onClick={this.addNote}>
                        Save
                    </div>
                </div>
            </div>
        )
    }
}

export default NoteForm;