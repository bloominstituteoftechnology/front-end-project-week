import React, { Component } from 'react';
import Menu from './Menu';
import './EditNote.css';

class EditNote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
            title: '',
            textBody: '',
        }
    }

    inputHandleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    editNote = event => {
        event.preventDefault()
        const note = {
            title: this.state.title,
            textBody: this.state.textBody,
            id: this.props.match.params.id,
        }

        this.props.updateNote(note)

        this.setState({
            title: '',
            textBody: '',
        })
    }

    render() {
        return (
            <div class='edit-container'>
                <Menu />
                <div class='input-container'>
                    <h2>
                        Edit Note:
                    </h2>
                    <input
                        class='new-note-title'
                        placeholder='Note Title'
                        name='title'
                        onChange={this.inputHandleChange}
                        value={this.state.title}
                    />
                    <textarea
                        class='note-content'
                        placeholder='Note Content'
                        name='textBody'
                        onChange={this.inputHandleChange}
                        value={this.state.textBody}
                    />
                    <div class='save-button' onClick={this.editNote}>
                        Update
                    </div>
                </div>
            </div>
        )
    }
}

export default EditNote;