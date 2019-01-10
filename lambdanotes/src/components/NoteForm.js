import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createNote } from '../actions'
import './styles/NoteForm.css'

//Component composed of a 2-part form in order to create new notes.
//This component shall be displayed upon the user clicking "create note", which will trigger createNote()
//This component shall take in a) a title and b) some content and store it this component's state.
//This component's state shall be the shape of a note object.
//This component shall ship its state data to the store through the createNote action.
class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: ''
        };
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.createNote(this.state);
        this.setState({
            title: "",
            textBody: ""
        });
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className="note-create">
                <form className="note-form" onSubmit={this.submitHandler}>
                    <h2>Create New Note:</h2>
                    <input id="title" onChange={this.handleInputChange} value={this.state.title} name="title" placeholder="Note Title" type="text" />
                    <textarea id="textBody" onChange={this.handleInputChange} value={this.state.textBody} name="textBody" placeholder="Note Content" type="text"></textarea>
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    };

}

export default connect(null, { createNote })(NoteForm);