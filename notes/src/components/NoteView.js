import React, { Component } from 'react';
import axios from '../../node_modules/axios';
import { getNotes } from '../actions';

class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {},
            titleInput: '',
            contentInput: '',
        }
      }
    

    componentDidMount() {
        console.log('NoteView mounted');
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
        const note = this.props.notes.find(note => note.id === this.props.match.params.id);
        this.setState({note});
        console.log(note);
    }

    deleteNote = event => {
        event.preventDefault();
        const id = this.state.note.id;
        axios
        .delete(
            `http://localhost:3300/${id}`
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
        const id = this.state.note.id;
        const updatedNote = {
            title: this.state.titleInput, 
            textBody: this.state.contentInput,
        };
        axios
            .put(
                `http://localhost:3300/${id}`, updatedNote
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
                <p>{this.state.note.content}</p>

                <button onClick={this.deleteNote}>
                    Delete this note
                </button>

                <form className='update-note-form'>
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
                </form>
            </div>
        )
    }
}

export default NoteView;