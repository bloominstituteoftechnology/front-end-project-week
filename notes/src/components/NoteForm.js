import React, { Component } from 'react'

class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    addNote = event => {
        event.preventDefault();
        let newNote = {
            title: this.state.title,
            content: this.state.content
        }
        this.props.addNote(newNote);
        this.setState({
            title: '',
            content: ''
        }, () => this.props.history.replace('/'))
    }

    render() {
        console.log(this.props);
        return (
            <form onSubmit={this.addNote}>
                <input type="text" name="title" onChange={this.handleChange} value={this.state.title} required></input>
                <textarea name="content" onChange={this.handleChange} value={this.state.content} required></textarea>
                <button>Add!</button>
            </form>
        )
    }
}

export default NoteForm;