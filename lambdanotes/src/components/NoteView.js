import React, { Component } from 'react'
import { editNote, deleteNote } from '../actions'
import { connect } from 'react-redux'
import SideBar from './SideBar'
import axios from 'axios';

//This component shall display a note from the database.
//NoteView shall have two buttons: "edit" & "delete"
//The buttons will trigger an aciton that will delete/edit the note.
class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNote: [],
            title: '',
            textBody: ''
        }
    }

    deleteHandler = event => {
        event.preventDefault();
        const killNote = {id: this.props.match.params.id}
        this.props.deleteNote(killNote)
    }

    submitHandler = event => {
        event.preventDefault();
        const newNote = {
            title: this.state.title,
            textBody: this.state.textBody,
            id: this.props.match.params.id
        }

        this.props.editNote(newNote);
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    componentDidMount() {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    currentNote: res.data
                })
                this.water=res.data;
            })
    }

    render() {
        return (
            <div>
                <SideBar />
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.handleInputChange} defaultValue={this.state.currentNote.title} name="title" placeholder="Title" type="text" />
                    <input onChange={this.handleInputChange} defaultValue={this.state.currentNote.textBody} name="textBody" placeholder="Text" type="text" />
                    <button type="submit">Edit Note</button>
                    <button onClick={this.deleteHandler}>Delete Note</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { editNote, deleteNote })(NoteView);