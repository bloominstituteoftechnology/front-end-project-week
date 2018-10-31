import React, { Component } from 'react';
import { createNote, getNotes } from '../actions';
import { connect } from 'react-redux';

class NoteForm extends Component {
    state = {
        titleInput: '',
        textBodyInput: '',
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleCreateNote = () => {
        console.log('handleCreateNote fired');
        // const { noteTitle, noteBody } = this.state;
        const title = this.state.titleInput;
        const textBody = this.state.textBodyInput;
        const newNote = { 
            title: title,
            textBody: textBody,
        };
        console.log(newNote);
        this.props.createNote(newNote);
        this.setState({ titleInput: '', textBodyInput: '' });
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
                    name='textBodyInput'
                    type='text'
                    placeholder='Note Body'
                    value={this.state.textBodyInput}
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