import React, { Component } from 'react';

class AddNote extends Component {
    state = {
        name: '',
        text: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ name: '', text: ''})
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="AddNote">
                <h4 className="Title">Create New Note:</h4>
                <form className="Form">
                    <input className="InputTitel" type='text' name='name' placeholder='New Title' onChange={this.handleChange} value={this.state.name}></input>
                    <input className="InputContent" type='text' name='text' placeholder='New Content' onChange={this.handleChange} value={this.state.text}></input>
                    <button className="Button" onClick={this.handleSubmit}>Save</button>
                </form>
            </div>
        );
    }
}

export default AddNote;