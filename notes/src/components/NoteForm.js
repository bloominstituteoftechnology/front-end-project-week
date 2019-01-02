import React, { Component } from 'react';

class NoteForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            textBody: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.props, this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='title'
                    placeholder='Type Title Here'
                    value={
                        this.state.title
                    }
                    onChange={
                        this.handleChange
                    }
                />
                <input
                    type='text'
                    name='textBody'
                    placeholder='Type Text Here'
                    value={
                        this.state.textBody
                    }
                    onChange = {
                        this.handleChange
                    }
                />
                <input
                    type='submit'
                    value='Add Note'
                />
            </form>
        )
    }
}

export default NoteForm;