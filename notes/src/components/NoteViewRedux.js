import React, { Component } from 'react';
import { connect } from 'react-redux';


import axios from '../../node_modules/axios';
import { getNotes, deleteNote, editNote } from '../actions';

class NoteViewRedux extends Component {

    // deleteNote = event => {
    //     event.preventDefault();
    //     const id = this.state.note.id;
    //     axios
    //     .delete(
    //         `http://localhost:3300/${id}`
    //     )
    //     .then(response => {
    //         this.props.getNotes();
    //         this.props.history.push('/notes');
    //     })
    //     .catch(error => {
    //     console.error('Server Error', error);
    //     });
    // };

    // updateNote = event => {
    //     event.preventDefault();
    //     const id = this.state.note.id;
    //     const updatedNote = {
    //         title: this.state.titleInput, 
    //         textBody: this.state.contentInput,
    //     };
    //     axios
    //         .put(
    //             `http://localhost:3300/${id}`, updatedNote
    //         )
    //         .then(response => {
    //             this.props.getNotes();
    //             this.props.history.push('/notes');
    //         })
    //         .catch(error => {
    //             console.error('Server Error', error);
    //         });
    // }

    // handleInputChange = event => {
    //     this.setState({ [event.target.name]: event.target.value });
    // };
    handleDeleteNote = () => {
        this.props.deleteNote(this.props.id);
        // this.props.getNotes();
        this.props.history.push('/notes');
    }

    render() {
        if(!this.props.note) {
            return null;
        }
        return (
            <div>
                <h1>{this.props.note.title}</h1>
                <p>{this.props.note.content}</p>

                <button onClick={this.handleDeleteNote}>
                    Delete this note
                </button>

                {/* <form className='update-note-form'>
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
                    <button onClick={this.updateNote}>
                        Update this note
                    </button>
                </form> */}
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
        deleteNote
    }
)(NoteViewRedux);