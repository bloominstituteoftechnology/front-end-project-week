import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './CreateNote.css';

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            content: ''
        }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitInputChange = props => {
        let notes = this.props.notes;
        let input = {title: this.state.title, 
            content: this.state.content, 
            id: this.state.id}
    }
    
    render() {
        return (
            <div className='create-note-container'>
                <div className='header'>
                    <h4 className='create-note-header'>Create New Note:</h4>
                </div>
                <form className='create-note-form'>
                    <input 
                        type='text'
                        className='crate-note-input-title'
                        name='title'
                        placeholder='Note Title'
                        value='{this.state.title'
                        onChange='{this.state.handleInputChange'
                    />
                    <textarea
                        className="content-input"
                        placeholder='Note Content'
                        name='content'
                        value='{this.state.content'
                        onChange='{this.handleInputChange}'
                    ></textarea>
                </form>
                <Link to='/'>
                    <button onClick={this.submitInputChange} className='create-view-button' >
                        Save
                    </button>
                </Link>
            </div>
        );
    }
}

export default CreateNote;