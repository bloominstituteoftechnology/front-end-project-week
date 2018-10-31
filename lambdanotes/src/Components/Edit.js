import React, { Component } from 'react';
import axios from 'axios';

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
        .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
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
            tags: [],
            _id: this.props.match.params.id
        }
        axios 
            .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, updatedNote)
            .then(response => {
                console.log('edit response', response)
                this.setState({ note: response.data })
            })
            .catch(error => console.log(error))

    }; 

    render() {
        return(
            <div className='edit-note'>  
                <h3 className="page-title">Edit Note:</h3>  
                <input 
                    type='text'
                    placeholder='Note Title'
                    name='title'
                    value={this.state.title}
                    onChange={this.handleTextInput}
                />
                <input 
                    type='text'
                    placeholder='Note Content'
                    name='textBody'
                    value={this.state.textBody}
                    onChange={this.handleTextInput}
                />
                <button onClick={() => this.editNote(this.props.match.params.id)}>Save</button>
            </div>
        )
    }
};
export default Edit;

