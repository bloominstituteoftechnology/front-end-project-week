import React, { Component } from 'react';

class CreateNewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: ''
        }
    }

  

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        if(this.props.edit) {
            this.props.editNote(
                this.state,
                this.props.match.params._id); 
        } else {
            this.props.createNote(this.state);
        }
        this.props.history.push('/');
    }
    render () {
        console.log(this.state)
        return (
            <div>
                <h2>{this.props.edit ? 'Edit Note': 'Create New Note'}</h2>
                <form onSubmit={this.submitHandler}>
                    <input
                        type='text'
                        name='title'
                        onChange={this.handleChange}
                        placeholder='Enter Title'
                        value={this.state.title}
                    />

                    <input
                        type='text'
                        name='textBody'
                        onChange={this.handleChange}
                        placeholder='Enter Text'
                        value={this.state.textBody}
                    />
                    <button onClick={this.submitHandler}>{this.props.edit ? 'Edit Note': 'Create New Note'}</button>
                </form>
            </div>
        );
    }
}

export default CreateNewNote