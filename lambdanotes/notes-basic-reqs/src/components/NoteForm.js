import React, { Component } from 'react';
import axios from 'axios';

class NoteForm extends Component {
    constructor(props) {
    super(props);
    this.state = {
        id: '',
        title: '',
        text: '',
    };
    }

    addNote = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const {  title, text  } = this.state;
    const noteData = { title, text };
    this.props.addNote(noteData);
    this.setState({
        title: '',
        text: '',
    });
    }

    handleInputChange = e => {
    this.setState({ [e.target.title]: e.target.value });
    };

    render() {
    return (
        <div className="NoteForm">
        <form onSubmit={this.addSmurf}>
            <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            />
            <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            />
            <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            />
            <button type="submit">Add Your Note</button>
        </form>
        </div>
    );
    }
}

export default NoteForm;