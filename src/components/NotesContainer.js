import React, { Component } from 'react';
import './NotesContainer.css'
import axios from 'axios';
class NotesContainer extends Component {
    state = {
        title: '',
        textBody: '',
    };

    handleChange = event => {
        this.setState({ title: event.target.value })
    };

    handleChange = event => {
        this.setState({ textBody: event.target.value })
    };

    handleSubmit = event => {
        event.preventDefault();


        axios.post('https://fe-notes.herokuapp.com/note/create', { 
            title: this.state.title,
            textBody: this.state.textBody,
        })
            .then(response => {
                console.log(response);
            console.log(response.data);
        })
    };

    render() {
        return (
            <div className="NotesContainer"> 
                <h1>Create New Note:</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input type="text" name="title" onChange={this.handleChange} />
                        Note:
                        <input type="text" name="note" onChange={this.handleChange} />

                    </label>
                    <div>
                     <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        )
    }
    

     
}

export default NotesContainer;