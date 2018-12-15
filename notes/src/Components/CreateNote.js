import React, { Component } from 'react';
import axios from 'axios';

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            contents: ''
        };
    }

addNote = e => {
    e.preventDefault();

    const newNote = {
        title: this.state.title,
        contents: this.state.contents
    }

    axios
    .post('http://localhost:3333/api/notes/', newNote)
    .then(response => {
        this.setState({notes: response.data})
        //this.props.history.push('/');
    })
}

handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value});
};

render() {
    return (
        <div>
            <form>
                <h1>Create New Note:</h1>
                <input 
                    onChange={this.handleInputChange}
                    placeholder='Note Title'
                    value={this.state.title}
                    name='title'
                />
                <input 
                    onChange={this.handleInputChange}
                    placeholder='Note Content'
                    value={this.state.contents}
                    name='contents'
                />
                <button onClick={this.addNote}>Save</button>
            </form>
        </div>
        );
    }
}

export default CreateNote;