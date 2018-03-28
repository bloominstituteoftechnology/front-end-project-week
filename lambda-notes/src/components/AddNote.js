import React, { Component } from 'react';

class AddNote extends Component {
    state = {
        title: '',
        text: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.add(this.state);
        this.setState({ title: '', text: ''})
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="AddNote">
                <h4 className="Title">Create New Note:</h4>
                <form className="Form">
                    <input className="Inputtext" type='text' name='title' placeholder='Note Title' onChange={this.handleChange} value={this.state.title}></input>
                    <textarea className="Inputfield" type='textarea' name='text' placeholder='Note Content' onChange={this.handleChange} value={this.state.text}></textarea>
                    <button className="Button" onClick={this.handleSubmit}>Save</button>
                </form>
            </div>
        );
    }
}

export default AddNote;