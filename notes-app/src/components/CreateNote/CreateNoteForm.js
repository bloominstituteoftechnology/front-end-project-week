import React, { Component } from 'react';
import { Route } from "react-router-dom";

class CreateNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody:''
        };
    }

    addNote = (e) => {
        e.preventDefault();
        this.props.addToList(this.state);
        this.setState({
            title: '',
            textBody:''
        })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    render() {
        return (
            <div className='NoteForm'>
                <form onSubmit={this.addNote}>
                    <input
                        className='inputs' 
                        onChange={this.handleChange}
                        placeholder='title'
                        value={this.state.title}
                        name='title'
                    />
                    <textarea
                        className='inputs'
                        name='textBody' 
                        onChange={this.handleChange} 
                        value={this.state.textBody} 
                        placeholder='content'></textarea>
                    <button type='submit'>Save</button>
                </form>
            </div>
        )
    }
}

export default CreateNoteForm;