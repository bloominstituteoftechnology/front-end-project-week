import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = 'https://heroku-backend-notes.herokuapp.com';

class Edit extends Component {
    constructor() {
        super();
        this.state = { 
            note: {}, 
            title: '',
            textBody: ''
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios
        .get(`${baseUrl}/notes/${id}`)
        .then(response => this.setState({ note: response.data, title: response.data.title, textBody: response.data.textBody }))
        .catch(error => console.log(error))
    }

    handleTextInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    editNote = (id) => {
        const updatedNote = {
            title: this.state.title,
            textBody: this.state.textBody,
            id: id
        }
        console.log('edit state', this.state)
        axios 
            .put(`${baseUrl}/notes/${id}`, updatedNote)
            .then(response => {
                console.log('edit response', response)
                this.setState({ note: response.data })
            })
            .catch(error => console.log(error.message))

    }; 

    render() {
        return(
            <div className="edit-note-container">  
                <h3 className="page-title">Edit Note:</h3>  
                <input className="title"
                    type='text'
                    placeholder='Note Title'
                    name='title'
                    value={this.state.title}
                    onChange={this.handleTextInput}
                />
                <input className="textbody"
                    type='text'
                    placeholder='Note Content'
                    name='textBody'
                    value={this.state.textBody}
                    onChange={this.handleTextInput}
                />
                <button onClick={() => this.editNote(this.props.match.params.id)} className="save">Save</button>
            </div>
        )
    }
};
export default Edit;

