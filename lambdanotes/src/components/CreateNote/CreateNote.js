import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CreateNote.css';

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: '',
        }
    }

    handleTitleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSaveNote = () => {
        console.log('handleCreateNote Fired')
        axios
            .post(`https://killer-notes.herokuapp.com/note/create`, this.state)
                .then(res => {
                    console.log(res);
                    this.props.updateState();
                    this.props.setCurrentNote(res.data);
                })
                .catch(err => {console.log(err)})
    }

    render() {
        return (
            <div className='CreateNoteContainer'>
                <div>
                    <h3 className='createNoteHeader'>Create New Note:</h3>
                </div>
                <form className='createNoteForm'>
                    <input 
                        onChange={this.handleTitleChange} 
                        type='text' 
                        className='createNoteInputTitle' 
                        name='title'
                        value={this.state.noteTitle}
                        placeholder='Note Title' 
                    />
                    <textarea
                        onChange={this.handleTitleChange}
                        type='text' 
                        className='createNoteInputContent' 
                        name='textBody'
                        value={this.state.noteContent}
                        placeholder='Note Content'>
                    </textarea>
                    <div className='cnEntireLink'>
                        <Link to={`/`}>
                            <input onClick={this.handleSaveNote} className='createNoteSaveButton' type='button' value='Save' />
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateNote;