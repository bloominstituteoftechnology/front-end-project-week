import React, { Component } from 'react';
import axios from 'axios';
import NoteView from './NoteView';

export class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            textBody: "",
        }
    }
    editNote = e => {
        axios.put(`https://fe-notes.herokuapp.com/note/edit/${this.props.match.params.id}`, this.state)
            .then(response => {this.setState(
                {title: "", textBody: ""}
            )})
            .catch(err => {console.log(err)})
    }

    handleInputChange = e => {
        this.setState( { [e.target.name]: e.target.value});
    };

    

    render() {
        return (
            <div>
                <form onSubmit={this.editNote}>
                    <input 
                        onChange={this.handleInputChange}
                        placeholder="New Title"
                        value={this.state.title}
                        name="title"
                    />
                    <input 
                        onChange={this.handleInputChange}
                        placeholder= "New Text"
                        value={this.state.textBody}
                        name="textBody"
                    />
                    <button type="submit">Update</button>
                </form>
                
            </div>
        )
    }
}