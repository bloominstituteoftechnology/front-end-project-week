import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

class CreateNote extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: '',
            id: null
        }
    }

    handleInput = (event, props) => {
        this.setState({
            [event.target.name]: event.target.value,
            id: this.props.notes.length 
        })
    }

    render() {
        return (
            <div className="main-view">
                <h2>Create New Note:</h2>
                <input type="text" name="title" placeholder="Note Title" onChange={this.handleInput} />
                <textarea name="content" placeholder="Note Content" onChange={this.handleInput} />
                <NavLink to='/' onClick={() => this.props.addNote(this.state)} className="button">Save</NavLink>
            </div>
        )
    }
}

export default CreateNote;