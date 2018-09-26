import React, { Component } from 'react';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteBody: '',

        }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleCreateNote = () => {
        // const { noteTitle, noteBody } = this.state;
        const title = this.state.noteTitle;
        const body = this.state.noteBody;
        this.props.createNote(title, body);
        this.setState({ noteTitle: '', noteBody: '' });
    };

    render() {
        return (
            <form onSubmit={() => this.handleCreateNote()}>

                <input 
                    name='noteTitle'
                    type='text'
                    placeholder='Note Title'
                    value={this.state.noteTitle}
                    onChange={this.handleInputChange}
                />

                <input 
                    name='noteBody'
                    type='text'
                    placeholder='Note Body'
                    value={this.state.noteBody}
                    onChange={this.handleInputChange}
                />
                
                <button onClick={() => this.handleCreateNote()}>
                    Create Note
                </button>
            </form>
        )
    }
}

export default NoteForm;