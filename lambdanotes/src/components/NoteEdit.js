import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { editNote, deleteNote } from '../actions'



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
            })
    }

    render() {
        return (
            <div className="note-edit">
                <form className="editview" onSubmit={this.submitHandler}>
                    <input onChange={this.handleInputChange} defaultValue={this.state.currentNote.title} name="title" placeholder="Title" type="text" />
                    <textarea onChange={this.handleInputChange} defaultValue={this.state.currentNote.textBody} name="textBody" placeholder="Text" type="text"></textarea>
                    <button type="submit">Edit Note</button>
                    <button onClick={this.deleteHandler}>Delete Note</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { editNote, deleteNote })(NoteView);