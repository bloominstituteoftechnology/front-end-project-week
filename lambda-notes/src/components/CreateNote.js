import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

class CreateNote extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            textBody: '',
            _id: null
        }
    }

    handleInput = (event, props) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <div className="main-view">
                <h2>Create New Note:</h2>
                <input className="title" type="text" name="title" placeholder="Note Title" onChange={this.handleInput} />
                <textarea className="text-body" name="textBody" placeholder="Note Content" onChange={this.handleInput} />
                <NavLink to='/' onClick={() => this.props.addNote(this.state)} className="button">Save</NavLink>
            </div>
        )
    }
}

export default CreateNote;