import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './CreateNewNote.css';

class CreateNewNote extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState(
            {
                [name]: value
            }
        )
    }

    handleClick = () => {
        fetch('http://localhost:9000/api/notes', {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify(this.state)
        })
        // .then(() => this.props.history.push('/'))
    }

    render() {
        return(
            <div className='create-new-note'>
                <p className='create-new-note-title'>Create New Note:</p>
                <form className='create-new-note-input'>
                    <input type='text' placeholder='Note Title' name='title' value={this.state.title} onChange={this.handleChange} />
                    <textarea type='text' placeholder='Note Content' name='content' value={this.state.content} onChange={this.handleChange} />
                    <button onClick={this.handleClick}><Link to='/' className='link'>Save</Link></button>
                </form>
            </div>
        );
    }
}

export default CreateNewNote;