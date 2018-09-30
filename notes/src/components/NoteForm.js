import React, { Component } from 'react';
import { createNote, getNotes } from '../actions';
import { connect } from 'react-redux';

class NoteForm extends Component {
    state = {
        noteTitle: '',
        noteBody: '',
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleCreateNote = () => {
        console.log('handleCreateNote fired');
        // const { noteTitle, noteBody } = this.state;
        const title = this.state.noteTitle;
        const body = this.state.noteBody;
        this.props.dispatchCreateNote({ title, body });
        this.setState({ noteTitle: '', noteBody: '' });
    };

    render() {
        return (
            <form>

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
                
                <button onClick={() => this.handleCreateNote()} type='button'>
                    Create Note
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        creatingNote: state.creatingNote,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchCreateNote: () => dispatch(createNote())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NoteForm);