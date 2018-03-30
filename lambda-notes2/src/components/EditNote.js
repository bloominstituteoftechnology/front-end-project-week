import React, { Component } from 'react';

class EditNote extends Component {
    state = {
        name: '',
        text: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const currentState = { 
            title: this.state.title,
            text: this.state.text,
            tags: this.state.tags
        }
        this.setState({ title: '', text: ''})
        this.props.history.push('/notes');
    }


    render() {
        return (
            <div className="EditNote">
                <h4 className="Title">Edit Note:</h4>
                <form className="Form">
                    <input className="Inputtext" type='text' name='name' placeholder='New Title' onChange={this.handleChange}></input>
                    <input className="Inputfield" type='text' name='text' placeholder='New Content' onChange={this.handleChange}></input>
                    <button className="Button" onClick={this.handleSubmit}>Update</button>
                </form>
            </div>
        );
    }
}

export default EditNote;