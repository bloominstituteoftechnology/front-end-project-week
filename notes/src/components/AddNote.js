import React, { Component } from 'react';

export class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            textBody: "",
        }
    }
    addNote = e => {
        e.preventDefault();
        const newNote = {
            title: this.state.title,
            textBody: this.state.textBody,
        }
        this.props.addNote(newNote);

        this.setState({
            title: '',
            textBody: '',
        });
    }

    handleInputChange = e => {
        this.setState( { [e.target.name]: e.target.value});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.addNote}>
                    <input 
                        onChange={this.handleInputChange}
                        placeholder="title"
                        value={this.state.title}
                        name="title"
                    />
                    <input 
                        onChange={this.handleInputChange}
                        placeholder="text"
                        value={this.state.textBody}
                        name="textBody"
                    />
                    <button type="submit">Add Note</button>
                </form>
            </div>
        )
    }
}