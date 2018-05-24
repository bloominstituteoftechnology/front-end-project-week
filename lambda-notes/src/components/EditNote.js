import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';


import './EditNote.css';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.currentNote.title,
            textBody: props.currentNote.textBody
        }
    }

    handleTitleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleUpdateNote = () => {
        console.log('handleUpdateNote Fired')
        axios
            .put(`https://killer-notes.herokuapp.com/note/edit/${this.props.currentNote._id}`, this.state)
                .then(res => {
                    console.log(res);
                    window.location.reload();                
                })
                .catch(err => {console.log(err)})
    }

    render() {
        return (
            <div className='editNoteContainer'>
                <div>
                    <h3 className='editNoteHeader'>Edit Note:</h3>
                </div>
                <form className='editNoteForm'>
                    <input 
                        onChange={this.handleTitleChange} 
                        type='text' 
                        className='edit-note-title' 
                        name='title'
                        value={this.state.title}
                        placeholder='Note Title'
                    />
                    <textarea
                        onChange={this.handleTitleChange}
                        type='text' 
                        className='edit-note-content' 
                        name='textBody'
                        value={this.state.textBody}
                        placeholder='Note Content'>
                    </textarea>
                    <div className='save-btn-link'>
                        <Link to={`/`}>
                            <input onClick={this.handleUpdateNote} className='editNoteSaveButton' type='button' value='Update' />
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditNote;