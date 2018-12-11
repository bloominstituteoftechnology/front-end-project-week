import React, { Component } from 'react';


class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            newNote: {
                title: '',
                textBody: ''
            }
        }
    }

    handleChange = e => {
        this.setState({
            newNote: { 
                ...this.state.newNote, 
                [e.target.name]: e.target.value 
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.createNote(this.state.newNote);

        console.log(this.props.createNote(this.state.newNote))
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input
                    type='text'
                    name='title'
                    placeholder='Enter Title'
                    value={this.state.newNote.title}
                    onChange={this.handleChange}
                />
                <div className='baseline'/>

                <label>Body</label>
                <input
                    type='text'
                    name='textBody'
                    placeholder='Enter Note Body'
                    value={this.state.newNote.textBody}
                    onChange={this.handleChange}
                />
                <div className='baseline'/>

                <input
                    type='submit'
                    value='Add Note'
                />
            </form>
        )
    }
}

export default NoteForm;