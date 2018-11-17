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
            <div className="Createnote">
                <h2>Create New Note:</h2>
                <form onSubmit={this.addNote}>
                    <input 
                        onChange={this.handleInputChange}
                        placeholder="Title"
                        value={this.state.title}
                        name="title"
                    />
                    <textarea 
                    className="textform"
                        onChange={this.handleInputChange}
                        placeholder="Text"
                        value={this.state.textBody}
                        name="textBody"
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}