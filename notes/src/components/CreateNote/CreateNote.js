import React, { Component } from 'react';
import './createNote.css';

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: ''
        }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div className="createNote">
                <h3>Create New Note:</h3>
                <form>
                    <input className="newTitle" type="text" placeholder="Title" value={this.state.title} name="title" onChange={event => this.changeHandler(event)} />
                    <textarea className="newContent" placeholder="Content" value={this.state.textBody} name="textBody" onChange={event => this.changeHandler(event)} />
                    <input className="saveButton" type="submit" value="save" />
                </form>
            </div>
        )
    }
}

export default CreateNote;