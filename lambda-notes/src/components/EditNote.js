import React, { Component } from 'react';

class EditNote extends Component {
    state = {
        title: '',
        text: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.edit(this.state, this.props.match.params.id);
        this.setState({ title: '', text: ''})
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="EditNote">
                <h4 className="Title">Edit Note:</h4>
                <form className="Form">
                    <input className="Inputtext" type='text' name='title' value={this.props.location.state.default.title} onChange={this.handleChange}></input>
                    <textarea className="Inputfield" type='textarea' name='text' value={this.props.location.state.default.text} onChange={this.handleChange}></textarea>
                    <button className="Button" onClick={this.handleSubmit}>Update</button>
                </form>
            </div>
        );
    }
}

export default EditNote;