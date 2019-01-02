import React, { Component, Fragment } from 'react';
import axios from 'axios';

class NoteForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            textBody: ''
        }
    }

    componentDidMount = () => {
        if (this.props.update) {
            this.setState({
                title: this.props.note.title,
                textBody: this.props.note.textBody
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.update ? this.props.handleUpdate(this.state) : this.props.handleCreate(this.state)
    }

    render() {
        return (
            <>
                {this.props.update ? <h1>Edit Note</h1> : <h1>Add Note</h1>}
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

                    {this.props.update ? <input
                        type='submit'
                        value='Update Note'
                    /> : <input
                        type='submit'
                        value='Create Note'
                    />}
                </form>
            </>
        )
    }
}

export default NoteForm;