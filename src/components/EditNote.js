import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './EditNote.css';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.currentNote.title,
            contents: props.currentNote.contents
        }
    }

    handleTitleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleUpdateNote = () => {
        console.log('handleUpdateNote Fired')
        axios
            .put(`https://lambdanotesbyhonda.herokuapp.com/notes/${this.props.currentNote._id}`, this.state)
                .then(res => {
                    console.log(res);
                    window.location.reload();                
                })
                .catch(err => {console.log(err)})
    }

    render() {
        return (
            <div className='edit-container'>
                <div>
                    <h3 className='edit-header'>Edit Note:</h3>
                </div>
                <form className='edit-form'>
                    <input 
                        onChange={this.handleTitleChange} 
                        type='text' 
                        className='edit-input-title' 
                        name='title'
                        value={this.state.title}
                        placeholder='Note Title'
                    />
                    <textarea
                        onChange={this.handleTitleChange}
                        type='text' 
                        className='edit-input-content' 
                        name='contents'
                        value={this.state.contents}
                        placeholder='Note Content'>
                    </textarea>
                    <div className='save-link'>
                        <Link to={`/`}>
                            <input onClick={this.handleUpdateNote} className='save-button' type='button' value='Update' />
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditNote; 