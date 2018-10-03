import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: ''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.value)
    }

    addNote = e => {
        const note = {
            title: this.state.title,
            textBody: this.state.textBody
        }
        console.log(note.textTitle)
        console.log(note)
        this.props.postNote(note)
        this.props.history.push('/');
    }

    render() {
        return(
            <div className="noteform-div">
                <form onSubmit={this.addNote}>
                    <input 
                    type="text" 
                    placeholder="title" 
                    name="title" 
                    onChange={this.handleChange} 
                    value={this.state.title}/>
                    <input 
                    type="text"
                    placeholder="notes here"
                    name="textBody" 
                    onChange={this.handleChange} 
                    value={this.state.textBody}/>
                    {/* <Link to="/notes"> */}
                    <button type="submit">Make Note</button>
                    {/* </Link> */}
                </form>
            </div>


        )
    }
}

export default NoteForm;