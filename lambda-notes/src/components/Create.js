import React, { Component } from 'react';
import axios from 'axios';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h3>Create New Note:</h3>
                <form onSubmit={this.createNote}>
                    <input 
                        placeholder="Note Title" 
                        onChange={this.props.handleTaskChange} 
                        value={this.props.title} 
                        name="title"
                    />
                    <br></br>
                    <input 
                        placeholder="Note Content" 
                        onChange={this.props.handleTaskChange} 
                        value={this.props.content} 
                        name="content"
                    />
                    <br></br>
                    <br></br>
                    <button className="create-button" onClick={this.props.handleAddNoteSubmit}>Save</button>
                </form>
            </div>
        );
    }

    createNote = event => {
        event.preventDefault();
        console.log(this.state);
    
        axios
            .post('http://localhost:5000/api/create', this.state)
            .then(res => {
                this.props.history.push('/notes');
            })
            .catch(err => {
                console.log(err);
            });
    };
    
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
}

export default Create;