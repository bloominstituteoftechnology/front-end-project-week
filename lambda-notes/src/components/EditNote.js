import React, { Component } from 'react';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            content: this.props.content
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    updateNote = e => {
        e.preventDefault();
        let updatedNote = {
            id: this.props.id,
            title: this.state.title,
            content: this.state.content
        }
        this.props.updateNote(updatedNote);
    }

    render() {
        return (
            <form onSubmit={this.updateNote}> 
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
                <button>Edit</button>
                <button onClick={this.props.onCancel}>Cancel</button>
            </form>
        )
    }
}
export default EditNote;