import React, { Component } from 'react';
import { connect } from 'react-redux';


import axios from '../../node_modules/axios';
import { getNotes, deleteNote, updateNote } from '../actions';

class NoteViewRedux extends Component {
    state = {
        titleInput: '',
        contentInput: '',
    };

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    handleDeleteNote = () => {
        this.props.deleteNote(this.props.id);
        this.props.history.push('/notes');
    };

    handleUpdateNote = event => {
        event.preventDefault();
        let updatedNote = { title: this.state.titleInput, content: this.state.contentInput };
        this.props.updateNote(this.props.id, updatedNote);
    };   

    render() {
        if(!this.props.note) {
            return null;
        }
        return (
            <div>
                <h2>Note Title: {this.props.note.title}</h2>
                <p>Note Content: {this.props.note.content}</p>

                <button onClick={this.handleDeleteNote}>
                    Delete this note
                </button>

                <form className='update-note-form'>
                    <h3>Update this note:</h3>
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
                        placeholder='Note Content'
                        value={this.state.contentInput}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleUpdateNote}>
                        Update this note
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    // debugger;
    return {
        note: state.notes.find(note => note.id.toString() === props.id),
        
    };
}

export default connect(
    mapStateToProps,
    {
        getNotes,
        deleteNote,
        updateNote,
    }
)(NoteViewRedux);