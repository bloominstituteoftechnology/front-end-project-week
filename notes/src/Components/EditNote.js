/* import React, { Component } from 'react';
import axios from 'axios';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: ''
        };
    }

addNote = e => {
    e.preventDefault();

    const newNote = {
        title: this.state.title,
        textBody: this.state.textBody
    }

    axios
    .put('https://fe-notes.herokuapp.com/note/edit/id', newNote)
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
                <h1>Edit New Note:</h1>
                <input 
                    onChange={this.handleInputChange}
                    placeholder='title'
                    value={this.state.title}
                    name='title'
                />
                <input 
                    onChange={this.handleInputChange}
                    placeholder='textBody'
                    value={this.state.textBody}
                    name='textBody'
                />
                <button onClick={this.addNote}>Save</button>
            </form>
        </div>
        );
    }
}

export default EditNote; */