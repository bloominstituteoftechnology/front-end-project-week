import React, { Component } from 'react';

class NewNoteForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addNote = e => {
        e.preventDefault();
        let newNote = {
            title: this.state.title,
            content: this.state.content
        }
        this.props.addNote(newNote, this.props.history);
        this.setState({
            title: '',
            content: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.addNote}>
                <input 
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                    value={this.state.title}
                    placeholder="Title"
                    required
                />
                <textarea
                    name="content"
                    onChange={this.handleChange}
                    value={this.state.content}
                    placeholder="Note..."
                    required
                />
                <button>Add</button>            
            </form>
        )
    }
}

export default NewNoteForm;