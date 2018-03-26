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
        this.setState({ name: '', text: ''})
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="EditNote">
                <h4 className="Title">Edit Note:</h4>
                <form>
                    <input type='text' name='name' placeholder='New Title' onChange={this.handleChange}></input>
                    <input type='text' name='text' placeholder='New Content' onChange={this.handleChange}></input>
                    <button onClick={this.handleSubmit}>Update</button>
                </form>
            </div>
        );
    }
}

export default EditNote;