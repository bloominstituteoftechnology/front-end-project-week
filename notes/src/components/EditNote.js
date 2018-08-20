import React, { Component } from 'react'

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    updateNote = event => {
        event.preventDefault();
        let updatedNote = {
            id: this.props.id,
            title: this.state.title,
            content: this.state.content
        }
        this.props.updateNote(updatedNote);
        this.setState({
            title: '',
            content: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.updateNote}>
                <input type="text" name="title" onChange={this.handleChange} value={this.state.title} required></input>
                <textarea name="content" onChange={this.handleChange} value={this.state.content} required></textarea>
                <button>Update!</button>
            </form>
        )
    }
}

export default EditNote;