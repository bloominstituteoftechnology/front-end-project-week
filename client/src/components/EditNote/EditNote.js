import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './EditNote.css';

class EditNote extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            titleError: null,
            text: '',
            textError: null,
        }
    };

    componentWillMount() {
        const token = localStorage.getItem('jwt');
        const requestOptions = {
            headers: {
                Authorization: token
            }
        }
        axios.get(`http://localhost:1433/api/users/${localStorage.getItem('userId')}/notes/${this.props.match.params.noteId}`, requestOptions)
            .then(response => {
                this.setState({ title: response.data.title, text: response.data.text })
            })
            .catch(error => {
                console.log(`Error: ${error.response.status} ${error.response.data}`);
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

    submitHandler = (event) => {
        event.preventDefault();
        const token = localStorage.getItem('jwt');
        const requestOptions = {
            headers: {
                Authorization: token
            }
        }
        axios.put(`http://localhost:1433/api/users/${localStorage.getItem('userId')}/notes/${this.props.match.params.noteId}`, { title: this.state.title, text: this.state.text }, requestOptions)
            .then(response => {
                this.props.history.push(`/${localStorage.getItem('userId')}/notes/${this.props.match.params.noteId}`);
            })
            .catch(error => {
                if (error.response.status === 400 && error.response.data[0] === 'title') {
                    this.setState({ titleError: error.response.data[1] });
                }
                else if (error.response.status === 400 && error.response.data[0] === 'text') {
                    this.setState({ textError: error.response.data[1] });
                }
                else {
                    console.log(`Error: ${error.response.status} ${error.response.data[1]}`);
                }
            })
    };

    render() {
        return (
            <div className='editNote' >
                <h4>Edit Note: </h4>
                <form onSubmit={this.submitHandler}>
                    <input name='title' onChange={this.handleOnChange} style={this.state.titleError ? { borderBottom: '1.5px solid red' } : { borderBottom: '1.5px solid #979797' }} type='text' value={this.state.title} />
                    {this.state.titleError ? <div className='titleError'>{this.state.titleError}</div> : null}
                    <textarea cols='50' name='text' onChange={this.handleOnChange} rows='15' style={this.state.textError ? { borderBottom: '1.5px solid red' } : { borderBottom: '1.5px solid #979797' }} value={this.state.text} />
                    {this.state.textError ? <div className='textError'>{this.state.textError}</div> : null}
                    <input className='submit' type='submit' value='Update' />
                </form>
            </div>
        )
    }
};

export default withRouter(EditNote); 