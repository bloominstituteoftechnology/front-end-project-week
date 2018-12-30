import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { editNote, deleteNote } from '../actions'

class NoteEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNote: [],
            title: '',
            textBody: ''
        }
    }

    toggleModal = () => {
        const modal = document.querySelector('.updateModal');
        switch (modal.style.display) {
            case "": modal.style.display = "flex";
                break;
            case "flex": modal.style.display = "";
                break;
            default: console.log("ERROR");
        }

    }

    deleteHandler = () => {
        window.history.back()
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
            <div>
                <div className="updateModal">
                    <div className="umodal-content">
                        <p> Note updated!</p>
                        <Link to='/' id="umodal-accept">Okay</Link>
                    </div>
                </div>

                <div className="note-edit">
                    <h2>Edit Note</h2>
                    <form className="editview" onSubmit={this.submitHandler}>
                        <input id="title" onChange={this.handleInputChange} name="title" placeholder={this.state.currentNote.title} type="text" />

                        <textarea id="textBody" onChange={this.handleInputChange} name="textBody" placeholder={this.state.currentNote.textBody} type="text"></textarea>

                        <button onClick={this.toggleModal} type="submit">Edit Note</button>
                        <button onClick={this.deleteHandler}>Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { editNote, deleteNote })(NoteEdit);