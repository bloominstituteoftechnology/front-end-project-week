import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

class CreateNote extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: ''
        }
    }

    render() {
        return (
            <div className="main-view">
                <h2>Create New Note:</h2>
                <input type="text" name="title" placeholder="Note Title" size="75" onChange={this.handleInput} />
                <textarea rows="12" cols="75" placeholder="Note Content" onChange={this.handleInput} />
                <NavLink to='/' onClick={this.addNote} className="button">Save</NavLink>
            </div>
        )
    }
}

export default CreateNote;