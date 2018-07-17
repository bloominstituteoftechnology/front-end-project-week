import React from 'react';
import { connect } from 'react-redux';
import { addNote, editNote } from '../../actions';

class NotesForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title || '',
            content: this.props.content || ''
        }
    }

    handleInput = event => {
        // Sets state depending on the name of input field
        this.setState({ [event.target.name]: event.target.value });
    }

    addNote = () => {
        // Adds a note if title / content fields aren't empty / Pushes back to notes page / Sets state to empty strings
        const note = { title: this.state.title, textBody: this.state.content }

        if (this.state.title === '' || this.state.content === '') return;

        this.props.addNote(note);
        this.props.history.push('/notes')
        this.setState({ title: '', content: '' });
    }

    editNote = () => {
        // Updates a note if title / content fields aren't empty / Pushes back to single note page / Sets state to empty strings
        const note = { title: this.state.title, textBody: this.state.content, id: this.props.id }

        if (this.state.title === '' || this.state.content === '') return;

        this.props.editNote(note);
        this.props.history.push(`/notes/${this.props.id}`)
        this.setState({ title: '', content: '' });
    }

    render() {
        // Displays input form for creating / updating a note
        return (
            <form className='notes-form' onSubmit={event => event.preventDefault()}>
                <input className='note-title-field' onChange={this.handleInput} value={this.state.title} name='title' type='text' placeholder='Note Title' />
                <textarea className='note-content-field' onChange={this.handleInput} value={this.state.content} name='content' type='text' placeholder='Note Content' />
                <button onClick={this.props.title ? this.editNote : this.addNote} className='main-buttons'>{this.props.title ? 'Update' : 'Save'}</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        fetching: state.fetchingNotes
    }
}

export default connect(mapStateToProps, { addNote, editNote })(NotesForm);