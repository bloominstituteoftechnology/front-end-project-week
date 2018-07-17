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
        this.setState({ [event.target.name]: event.target.value });
    }

    addNote = () => {
        const note = { title: this.state.title, textBody: this.state.content }

        if (this.state.title === '' || this.state.content === '') return;

        this.props.addNote(note);
        this.props.history.push('/notes')
        this.setState({ title: '', content: '' });
    }

    editNote = () => {
        const note = { title: this.state.title, textBody: this.state.content, id: this.props.id }

        this.props.editNote(note);
        this.props.history.push('/notes')
        this.setState({ title: '', content: '' });
    }

    render() {
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