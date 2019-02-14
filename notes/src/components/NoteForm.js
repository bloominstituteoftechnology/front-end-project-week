import React, { Component } from 'react';
import { createNote, getNotes } from '../actions';
import { connect } from 'react-redux';

class NoteForm extends Component {
    state = {
        titleInput: '',
        contentInput: '',
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleCreateNote = () => {
        console.log('handleCreateNote fired');
        // const { noteTitle, noteBody } = this.state;
        const title = this.state.titleInput;
        const content = this.state.contentInput;
        const newNote = { 
            title,
            content
        };
        console.log(newNote);
        this.props.createNote(newNote);
        this.setState({ titleInput: '', contentInput: '' });
    };

    render() {
        return (
            <form>

                <input 
                    name='titleInput'
                    type='text'
                    placeholder='Note Title'
                    value={this.state.titleInput}
                    onChange={this.handleInputChange}
                />

                <input 
                    name='contentInput'
                    type='text'
                    placeholder='Note Body'
                    value={this.state.contentInput}
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
    {createNote},
)(NoteForm);