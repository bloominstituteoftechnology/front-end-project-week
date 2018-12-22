import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createNote } from '../actions'
import SideBar from './SideBar'

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
        this.props.getNotes();
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                <SideBar />
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.handleInputChange} value={this.state.title} name="title" placeholder="Title" type="text" />
                    <input onChange={this.handleInputChange} value={this.state.textBody} name="textBody" placeholder="Text" type="text" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    };

}

export default connect(null, { createNote })(NoteForm);