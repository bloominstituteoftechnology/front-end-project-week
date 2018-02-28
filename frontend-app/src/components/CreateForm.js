import React, { Component } from 'react';

class CreateForm extends Component {
    state = {
        title: '',
        content: ''
        
    };

    handleInputChage = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleAddNote = event => {
        
    }

    render() {
        return (
            <form className="Column-Layout">
                <input 
                    type="text"
                    value={this.state.title}
                    name="title"
                    placeholder="Title"
                    onChange={this.handleInputChange}
                />
                <input 
                    type="text"
                    value={this.state.content}
                    name="title"
                    placeholder="Content"
                    onChange={this.handleInputChange}
                />
                <button>
                    Add Note
                </button>
                
            </form>
        );
    }
}

export default CreateForm;