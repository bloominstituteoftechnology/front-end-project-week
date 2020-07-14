import React, { Component } from 'react';
import axios from '../../node_modules/axios';
import { getNotes } from '../actions';

class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {},
            noteTitleInput: '',
            noteBodyInput: '',
        }
    }
    

    componentDidMount() {
        // const id = this.props.match.params.id;
        // axios 
        //     .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
        //     .then(response => {
        //         console.log('Response: ', response);
        //         this.setState({ note: response.data });
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
        const note = this.props.notes.find(note => note._id === this.props.match.params.id);
        this.setState({note});
    }

    deleteNote = event => {
        event.preventDefault();
        const id = this.state.note._id;
        axios
        .delete(
            `https://killer-notes.herokuapp.com/note/delete/${id}`
        )
        .then(response => {
            this.props.getNotes();
            this.props.history.push('/notes');
        })
        .catch(error => {
        console.error('Server Error', error);
        });
    };

    updateNote = event => {
        event.preventDefault();
        const id = this.state.note._id;
        const updatedNote = {
            title: this.state.noteTitleInput, 
            textBody: this.state.noteBodyInput,
        };
        axios
            .put(
                `https://killer-notes.herokuapp.com/note/edit/${id}`, updatedNote
            )
            .then(response => {
                this.props.getNotes();
                this.props.history.push('/notes');
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div>
                <h1>{this.state.note.title}</h1>
                <p>{this.state.note.textBody}</p>

                <button onClick={this.deleteNote}>
                    Delete this note
                </button>

                <form className='update-note-form'>
                    <input 
                        name='noteTitleInput'
                        type='text'
                        placeholder='Note Title'
                        value={this.state.noteTitleInput}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        name='noteBodyInput'
                        type='text'
                        placeholder='Note Body'
                        value={this.state.noteBodyInput}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.updateNote}>
                        Update this note
                    </button>
                </form>
            </div>
        )
    }
}

export default NoteView;