import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom';
import './CreateNote.css';

class CreateNote extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            titleError: null,
            text: '',
            textError: null,
            notes: [],
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        const token = localStorage.getItem('jwt');
        const requestOptions = {
            headers: {
                Authorization: token
            }
        }
        
        axios.post(`https://lambda-notes0706.herokuapp.com/api/users/${localStorage.getItem('userId')}/notes`, { title: this.state.title, text: this.state.text }, requestOptions)
            .then(response => {
                this.setState({ notes: response.data.notes });
            })
            .catch(error => {
                if (error.response.status) {
                    if (error.response.status === 400 && error.response.data[0] === 'title') {
                        this.setState({ titleError: error.response.data[1] });
                    }
                    else if (error.response.status === 400 && error.response.data[0] === 'text') {
                        this.setState({ textError: error.response.data[1] });
                    }
                    else {
                        console.log(`Error: ${error.response.status} ${error.response.data[1]}`);
                    }
                }
                else {
                    console.log(`Error: ${error}`);
                }
            })
    }

    handleOnChange = (event) => {
        const { name, value } = event.target;
        if (name === 'title') {
            this.setState({ [name]: value, titleError: null });
        }
        else if (name === 'text') {
            this.setState({ [name]: value, textError: null });
        }
        else {
            this.setState({ [name]: value });
        }
    }

    render() {
        return (
            <div className='createNote'>
                <h4>Create New Note:</h4>
                <form onSubmit={this.submitHandler}>
                    <input name='title' onChange={this.handleOnChange} placeholder='Note Title' style={this.state.titleError ? { borderBottom: '1.5px solid red' } : { borderBottom: '1.5px solid #979797' }} type='text' value={this.state.title} />
                    {this.state.titleError ? <div className='titleError'>{this.state.titleError}</div> : null}
                    <textarea cols='50' name='text' onChange={this.handleOnChange} placeholder='Note Content' rows='15' style={this.state.textError ? { borderBottom: '1.5px solid red' } : { borderBottom: '1.5px solid #979797' }} value={this.state.text}></textarea>
                    {this.state.textError ? <div className='textError'>{this.state.textError}</div> : null}
                    <input className='submit' type='submit' value='Save' />
                </form>
                {this.state.notes.length > 0 ? <Redirect to={`/${localStorage.getItem('userId')}/notes/${this.state.notes[this.state.notes.length - 1]._id}`} /> : null}
            </div>
        )
    }
};

export default withRouter(CreateNote); 