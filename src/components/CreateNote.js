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
            .post(`https://lambdanotesbyhonda.herokuapp.com/notes/`, this.state)
                .then(res => {
                    console.log(res);
                    window.location.reload();                
                })
                .catch(err => {console.log(err)})
    }

    render() {
        return (
            <div className='create-container'>
                <div>
                    <h3 className='create-header'>Create New Note:</h3>
                </div>
                <form className='create-form'>
                    <input 
                        onChange={this.handleTitleChange} 
                        type='text' 
                        className='create-input-title' 
                        name='title'
                        value={this.state.noteTitle}
                        placeholder='Note Title' 
                    />
                    <textarea
                        onChange={this.handleTitleChange}
                        type='text' 
                        className='create-input-content' 
                        name='textBody'
                        value={this.state.noteContent}
                        placeholder='Note Content'>
                    </textarea>
                    <div className='create-link'>
                        <Link to={`/`}>
                            <input onClick={this.handleSaveNote} className='create-save-btn' type='button' value='Save' />
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateNote; 